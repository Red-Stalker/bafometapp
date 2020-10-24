import React, {useState} from "react"
import classes from "./SelectShop.module.css"
import {MultiSelect} from "primereact/multiselect";
import "./SelectedShop.css"

const SelectShop = (props) =>{
    const [selectedData, setSelectedData] = useState(null)

    const data = [
        {name: 'Супермаркет', code: 'AU'},
        {name: 'Продукты', code: 'BR'},
        {name: 'Торговый центр', code: 'CN'},
        {name: 'Алкомаркет', code: 'EG'},
        {name: 'Сувениры', code: 'FR'},
        {name: 'Рынок', code: 'DE'},
        {name: 'Мясно', code: 'IN'},
        {name: 'Овощи', code: 'JP'},
        {name: 'Спортивные товары', code: 'ES'},
        {name: 'Музыкальные инструменты', code: 'US'},
        {name: 'Оптика', code: 'ES'},
        {name: 'Рыба', code: 'ES'},
        {name: 'Цветы', code: 'ES'},
        {name: 'Ювелирный', code: 'ES'},
        {name: 'Детский', code: 'ES'},
        {name: 'Ткани и рукоделие', code: 'ES'},
        {name: 'Электроника', code: 'ES'},
        {name: 'Товары для дома', code: 'ES'},
        {name: 'Косметика', code: 'ES'},
        {name: 'Сантехника', code: 'ES'},
        {name: 'Мебель', code: 'ES'},
        {name: 'Строительство и ремонт', code: 'ES'},
        {name: 'Зоомагазин', code: 'ES'},
        {name: 'Фиксированная цена', code: 'ES'},
        {name: 'Одежда', code: 'ES'},
        {name: 'Обувь', code: 'ES'},
        {name: 'Пекарни и кондитерские', code: 'ES'},
        {name: 'Канцтовары и книги', code: 'ES'},
        {name: 'Комиссионный', code: 'ES'}
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

        return "Какой магазин вы ищите?";
    }

    return(
        <div className={classes.inner}>
            <MultiSelect value={selectedData} options={data}  onChange={(e) => setSelectedData(e.value)} optionLabel="name" placeholder="Select Countries" filter className="multiselect-custom"
                         itemTemplate={countryTemplate} selectedItemTemplate={selectedCountriesTemplate} />
        </div>
    )
}

export default SelectShop;