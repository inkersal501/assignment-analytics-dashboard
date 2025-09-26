import React, { useRef, useState } from "react";
import { VectorMap } from '@south-paw/react-vector-maps';
import world from "../../assets/world.json";
import { useDispatch, useSelector } from "react-redux";
import { updateCountry } from "../../store/appSlice"; 
import { FaExpand } from "react-icons/fa6";
import screenfull from 'screenfull'; 
import { ResponsiveContainer } from "recharts";
 
function StoreFronts() {
    const dispatch = useDispatch();
    const {country} = useSelector((state) => state.app); 
    const containerRef = useRef(null);
    const [zoom, setZoom] = useState(false);
    const highlighted = {
       IN: "#ff5900", 
    };

    const handleFullscreen = () => {
        if (screenfull.isEnabled && containerRef.current) {
            screenfull.toggle(containerRef.current);
            setZoom(!zoom);
        }
    }; 
    return (
        <div className="w-full h-full">
            <h2 className="text-2xl mb-3">Store Fronts</h2>
            <div className="bg-white rounded-xl shadow w-full h-[500px] border border-gray-300" ref={containerRef}>
                <div className="border-b border-gray-300 p-4 flex justify-between">
                    <h2 className="text-lg font-semibold mb-3">Spend</h2>                    
                    <div>
                        <button onClick={handleFullscreen} className={`text-gray-400 p-2 bg-gray-400/20 rounded-lg me-2`}><FaExpand size={22}/></button>
                    </div> 
                </div>
                <div className="p-4 flex justify-center h-[75%] relative">
                    <ResponsiveContainer width="95%" height="100%">
                        <VectorMap
                            style={{ height: !zoom ? "400px": "auto" }}
                            {...world}
                            layerProps={{
                                onMouseEnter: ({ target }) => target.setAttribute("fill", "#ff884d"),
                                onMouseLeave: ({ target }) => target.setAttribute("fill", country?.id === target.attributes.id.value ? "#382ba8" : highlighted[target.attributes.id.value] || "#f2f2f2"),
                                onClick: ({ target }) => dispatch(updateCountry({ id: target.attributes.id.value, name: target.attributes.name.value})),
                                style: {
                                    fill: "rgba(255, 218, 181, 1)",
                                    stroke: "#909090",
                                    strokeWidth: 0.5,
                                    cursor: "pointer",
                                },
                            }}
                            currentLayers={country ? [country.id] : []}
                        />
                    </ResponsiveContainer>        
                </div>     
            </div>
        </div>
    );
}

export default StoreFronts;
