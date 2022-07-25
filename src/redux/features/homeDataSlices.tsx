import { createSlice } from "@reduxjs/toolkit";

interface HomeStateData {
    id: number;
    title: string;
    content: string;
    icon: string;
}

interface ForestData {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    imageId: string;
    buttonText: string;
}

interface EnergyData {
    id: number;
    title: string;
    types: string;
    description: string;
    image: string;
}

export interface HomeState {
    homeData: HomeStateData[],
    forestData: ForestData[],
    energyData: EnergyData[]
}

const initialState: HomeState = {
   homeData:  [
        {
            id:1,
            title: "Helping Hand",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur doloribus reiciendis incidunt odit sequi enim at eos.",
           icon: "FaHands"
        },
        {
            id: 2,
            title: "Plants",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed quisquam magni voluptate necessitatibus dicta provident aspernatur quidem amet eveniet!",
            icon: "RiPlantFill"
        },
        {
            id: 3,
            title: "Animals",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi similique quo totam fugit reiciendis sequi error illum ex nihil dolore?",
            icon: "GiElephant"
        },
    ],
    forestData: [
        {
            id: 1,
            title: "Save Resources",
            subtitle: "Your donations can help the earth",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis culpa non voluptatem numquam nisi iusto nobis eius vero suscipit. Doloremque quasi, animi eligendi ad eos, recusandae, sapiente soluta debitis atque voluptatibus id. Provident, nisi.",
            imageId: "forest-one",
            buttonText: "Donate Now",
        },
        {
            id: 2,
            title: "Conserve Resources",
            subtitle: "Learn to lower you ecological footprint",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis culpa non voluptatem numquam nisi iusto nobis eius vero suscipit. Doloremque quasi, animi eligendi ad eos, recusandae, sapiente soluta debitis atque voluptatibus id. Provident, nisi.",
            imageId: "forest-two",
            buttonText: "Go Green",
        },
    ],
    energyData: [
        {
            id: 1,
            title: "Solar",
            types: "Sunlight, Microgrid, Panels",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit odit tenetur officiis facere nisi!",
            image: "unsplash-energy-3"
        },
        {
            id: 2,
            title: "Wind",
            types: "Wind Turbines, Wind Farms",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium. Totam rem aperiam, eaque ipsa quae ab veritatis et quasi architecto dicta sunt explicabo.",
            image: "unsplash-energy-4"
        },
        {
            id: 3,
            title: "Water",
            types: "Hydroelectric Power, Ocean Tides",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui. Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
            image: "unsplash-energy-1"
        },
        {
            id: 4,
            title: "Geothermal",
            types: "Internal Heat, Hot Spring",
            description: "Ut quam quam et voluptatem sequi vel commodi eaque ut velit totam ut numquam expedita. Quo iusto doloribus et fuga ducimus et vitae iure qui aut deserunt eveniet et saepe dolorum est officiis consectetur.",
            image: "unsplash-energy-2"
        }
    ]
};

export const homeDataSlices = createSlice({
    name: "homeInfo",
    initialState: initialState,
    reducers: {
        getData: (state, action) => {
            
        }
        
    }

})

export const { getData } = homeDataSlices.actions;


export default homeDataSlices.reducer;