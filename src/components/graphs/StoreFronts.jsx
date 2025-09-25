import React from "react";
import { VectorMap } from '@south-paw/react-vector-maps';
import world from "../../assets/world.json";
import { useDispatch, useSelector } from "react-redux";
import { updateCountry } from "../../store/appSlice";

function StoreFronts() {
    const dispatch = useDispatch();
    const {country} = useSelector((state) => state.app);

    const highlighted = {
       IN: "#ff5900", 
    };
 
    return (
        <div className="bg-white rounded-xl shadow w-full h-[500px] border border-gray-400">
            <div className="border-b border-gray-400 p-4">
                <h2 className="text-lg font-semibold mb-3">Spend</h2>
            </div>
            <div className="p-4 flex justify-center">
                <VectorMap
                style={{height: "400px"}}
                    {...world}
                    layerProps={{
                        onMouseEnter: ({ target }) => target.setAttribute("fill", "#ff884d"),
                        onMouseLeave: ({ target, id }) =>
                        target.setAttribute(
                            "fill",
                            country?.id === id ? "#382ba8" : highlighted[id] || "#f2f2f2"
                        ),
                        onClick: ({ target }) =>
                        dispatch(
                            updateCountry({
                                id: target.attributes.id.value,
                                name: target.attributes.name.value,
                            })
                        ),
                        style: {
                            fill: "rgba(255, 218, 181, 0.72)",
                            stroke: "#909090",
                            strokeWidth: 0.5, 
                        },
                    }}
                    currentLayers={country ? [country.id] : []}
                />
            </div>       
        </div>
    );
}

export default StoreFronts;
