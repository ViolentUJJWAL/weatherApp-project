import React from "react"

function MoreResult(props) {
    return (
        <div className="m-5 ">
            <div className="row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-More-data" data-bs-toggle="list" href="#hide" role="tab" aria-controls="list-home">Hide</a>
                        <a className="list-group-item list-group-item-action" id="list-More-data" data-bs-toggle="list" href="#more-data" role="tab" aria-controls="list-home">More Data</a>
                        <a className="list-group-item list-group-item-action" id="list-air-data" data-bs-toggle="list" href="#air-data" role="tab" aria-controls="list-profile">Air Quality</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="hide" role="tabpanel" aria-labelledby="list-profile-list">
                    </div>
                        <div className="tab-pane fade" id="more-data" role="tabpanel" aria-labelledby="list-home-list">
                            <table className="table table-dark table-hover">
                                <tbody>
                                    <tr>
                                        <th>Wind Speed</th>
                                        <td>{props.moreData.wind_mph} m/h</td>
                                        <td>{props.moreData.wind_kph} km/h</td>
                                    </tr>
                                    <tr>
                                        <th>Wind direction</th>
                                        <td colSpan="2">{props.moreData.wind_degree}&deg; {props.moreData.wind_dir}</td>
                                    </tr>
                                    <tr>
                                        <th>Pressure</th>
                                        <td>{props.moreData.pressure_mb} mb</td>
                                        <td>{props.moreData.pressure_in} in</td>
                                    </tr>
                                    <tr>
                                        <th>Precip</th>
                                        <td>{props.moreData.precip_mm} mm</td>
                                        <td>{props.moreData.precip_in} in</td>
                                    </tr>
                                    <tr>
                                        <th>Humidity</th>
                                        <td colSpan="2">{props.moreData.humidity}%</td>
                                    </tr>
                                    <tr>
                                        <th>Cloud</th>
                                        <td colSpan="2">{props.moreData.cloud}%</td>
                                    </tr>
                                    <tr>
                                        <th>Feelslike</th>
                                        <td>{props.moreData.feelslike_c}&deg; c</td>
                                        <td>{props.moreData.feelslike_f}&deg; f</td>
                                    </tr>
                                    <tr>
                                        <th>Vision</th>
                                        <td>{props.moreData.vis_km} km</td>
                                        <td>{props.moreData.vis_miles} miles</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane fade" id="air-data" role="tabpanel" aria-labelledby="list-profile-list">
                            <table className="table table-dark table-hover">
                                <tbody>
                                    <tr>
                                        <th>Carbon Monoxide (co)</th>
                                        <td>{props.moreData.air_quality.co}</td>
                                    </tr>
                                    <tr>
                                        <th>Nitrogen Dioxide (no<sub>2</sub>)</th>
                                        <td>{props.moreData.air_quality.no2}</td>
                                    </tr>
                                    <tr>
                                        <th>Ozone (O<sub>3</sub>)</th>
                                        <td>{props.moreData.air_quality.o3}</td>
                                    </tr>
                                    <tr>
                                        <th>Sulfur dioxide (so<sub>2</sub>)</th>
                                        <td>{props.moreData.air_quality.so2}</td>
                                    </tr>
                                    <tr>
                                        <th>Particulate matter (PM<sub>2.5</sub>)</th>
                                        <td>{props.moreData.air_quality.pm2_5}</td>
                                    </tr>
                                    <tr>
                                        <th>Particulate matter (PM<sub>10</sub>)</th>
                                        <td>{props.moreData.air_quality.pm10}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreResult;