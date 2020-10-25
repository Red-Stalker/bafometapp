import React, {useState} from "react"
import classes from "./SelectFilter.module.css"
import { Dropdown } from 'primereact/dropdown';
import "./SelectedFilter.css"

const SelectFilter = (props) =>{
    const [selectedData, setSelectedData] = useState(null)

    const data = [
        {name: 'По цене', code: 'Price'}, 
        {name: 'По растоянию', code: 'MM'}, 
        {name: 'По популярности', code: 'MM'},
    ];

    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedCountriesTemplate = (option) =>{
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Сортировка";
    }

    return(
        <div className={classes.inner}>
            <Dropdown value={selectedData} options={data} placeholder="Сортировка" onChange={(e) => setSelectedData(e.value)} optionLabel="name"  filter className="multiselect-custom"
                         itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} />
        </div>
    )
}

export default SelectFilter;