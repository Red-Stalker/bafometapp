import React, {useState} from "react"
import classes from "./SelectFilter.module.css"
import { Dropdown } from 'primereact/dropdown';
import "./SelectedFilter.css"

const SelectFilter = (props) =>{
    const [selectedData, setSelectedData] = useState(props.filters.sort)

    const data = [
        {name: 'По растоянию', code: 'distance'},
        {name: 'По популярности', code: 'rating'},
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
            <Dropdown value={selectedData}
                      options={data} onChange={(e)=>{
                            props.getShops({
                                ...props.filters,
                                sorf: e.value.code
                            })
                      }}
                      optionLabel="name"
                      placeholder="Сортировать"
            />
        </div>
    )
}

export default SelectFilter;