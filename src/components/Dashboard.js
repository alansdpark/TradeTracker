import React from 'react'

import '../vendor/fontawesome-free/css/all.min.css';

export default function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        P/L (YTD)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$300</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        P/L (YTD After 20% Taxes)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$270</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Open Trades</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">1</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="row">

            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">

                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">P/L Overview</h6>
                    </div>

                    <div className="card-body">
                        <div className="chart-area">
                            <canvas id="myAreaChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Sector Percentages</h6>
                    </div>

                    <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                            <canvas id="myPieChart"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success"></i> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info"></i> Referral
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            </div>

            <div className="row">

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        Total Deposited (Initial Principal)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$4000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Total in Account</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$270</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        P/L (Lifetime)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$270</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
