import { TabView, TabPanel } from 'primereact/tabview';
import React, {useContext, useEffect, useState} from "react";
import classes from "./Tabs.module.css";
import { Button } from 'primereact/button';
import {ReactComponent as Photo} from "./photo.svg";
import {ReactComponent as Taxi} from "./taxi.svg";
import {ReactComponent as Call} from "./call.svg";
import {ReactComponent as Net} from "./net.svg";
import sber from "./sber.png";
import spas from "./spas.png";

const Tabs = (props) => {
    

    return(
        <div className="tabview-demo">
                <div className="card">
                    <TabView>
                        <TabPanel header="Информация">
                            <div className={classes.address}>
                                {props.shop == null?
                                    <div>​Репина, 94
                                        Юго-Западный, Верх-Исетский район, Екатеринбург, 620043
                                        2 этажа
                                    </div>:
                                    props.shop.full_address_name
                                }
                            </div>
                            <div className={classes.netAndNumber}>
                                <div className={classes.number}>
                                <Call/>+7 (343) 3‒111‒888
                                </div>
                                <div className={classes.net}>
                                <Net/>www.radugapark.ru

                                
                                </div>
                            </div>
                            <div className={classes.taxiBlock}>
                            <Taxi style={{float: "right",width:70}}/>
                                <h5>
                                    Это место особенное                                  
                                </h5>

                                <h3>
                                    Такси будет стоить всего <span>115₽</span> <span className={classes.textTaxi}>240₽</span>
                                </h3>
                            </div>
                            <div style={{marginTop:20}}>
                                <div>
                                <span className={classes.titleBlock}>
                                    Сервисы
                                </span>
                                <div className={classes.paddingBlock}>
                                    <span>
                                        Можно заказать через <img src={sber} alt="sber"/>
                                    </span>
                                    <span>
                                        Партнер программы <img src={spas} alt="spasibo"/>
                                        
                                    </span>
                                </div>
                                </div>
                                <div>
                                    <span className={classes.titleBlock}>
                                        Меры предосторожности
                                    </span>
                                    <div className={classes.paddingBlock}>
                                        <span>
                                            Сотрудники в масках и перчатках 
                                        </span>
                                        <span>
                                            Есть антисептики
                                        </span>
                                        <span>
                                        Ограничение по количеству посетителей 
                                        </span>
                                        <span>
                                        Сотрудники в масках и перчатках 
                                        </span>
                                    </div>
                                </div>
                                <div>
                                <span className={classes.titleBlock}>
                                    Загруженность
                                </span>
                                <div className={classes.paddingBlock}>
                                    
                                </div>
                                </div>
                            </div>
                            
                        </TabPanel>
                        <TabPanel header="Отзывы">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Службы">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
    )
};

export default Tabs;