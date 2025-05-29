import './Budget.css';


import { useState, useEffect } from "react";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import ListContainer from "../Utils/ListContainer/ListContainer";
import ModalDialog from "../Utils/ModalDialog/ModalDialog";
import { Select, Textbox } from "../Layout";
import { getBudgetBySocietyId, getAllSocieties, getSocietyDetailsById } from "../../Utils";
import { api } from "../../constants/api";

const SocietyBudget = () => {
    const [isNew, setIsNew] = useState(false);
    const [societyList, setSocietyList] = useState([]);
    const [budgetList, setBudgetList] = useState([]);
    const [societyDetail, setSocietyDetail] = useState([]);
    const [finalExpenditureAmount, setfinalExpenditureAmount] = useState(null);
    const [formData, setFormData] = useState({
        society: '',
        componentName: '',
        componentDetail: '',
        expenditureAmount: '',
        payFrequency: '',
        assignedAgency: '',
    });

    useEffect(() => {
        getAllSocieties().then((societyList) => { setSocietyList(societyList); });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name !== null && name === 'society' && value !== null && value !== undefined) {
            getBudgetBySocietyId(value).then((budgetList) => {
                setBudgetList(budgetList);
                if (name !== null && name === 'society' && value !== null && value !== undefined) {
                    getSocietyDetailsById(value).then((societyDetail) => {
                        setSocietyDetail(societyDetail);
                        const amout = getExpenditureSum(budgetList, societyDetail?.siteUnitCount);
                        setfinalExpenditureAmount(amout);
                    });
                }

            });
        }


    };

    const getExpenditureSum = (budgetData, siteUnitCount) => {
        if (budgetData && budgetData?.length > 0) {
            const total = budgetData.reduce((sum, item) => sum + item.expenditureAmount, 0);
            const finalAmount = {
                perYear: total * 12,
                perMonth: total,
                perheadMonthly: (total / siteUnitCount)?.toFixed(2),
                perheadYearly: ((total * 12) / siteUnitCount)?.toFixed(2)
            }
            return finalAmount;
        } else {
            return null;
        }
    }

    const onRowClick = (e) => {
        setIsNew(false);
        setFormData(e.data);
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Select
                        placeholder="--Select Society--"
                        name="society"
                        label={<h5>Select Society</h5>}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                        data={societyList}
                        value={formData.society}
                    />
                </div>
            </div>
            {finalExpenditureAmount &&
                <div className='row mt-4'>
                    <div className="col-6">
                        <div>
                            <ul>
                                <li>Sum of the expenditure amount for a year : <span style={{ 'color': 'green' }}>₹{finalExpenditureAmount.perYear} </span></li>
                                <li>Sum of the expenditure amount for a month : <span style={{ 'color': 'green' }}>₹{finalExpenditureAmount.perMonth} </span></li>
                                <li>Per Head ammount for a month : <span style={{ 'color': 'green' }}>₹{finalExpenditureAmount.perheadMonthly} </span></li>
                                <li>Per Head ammount for a year : <span style={{ 'color': 'green' }}>₹{finalExpenditureAmount.perheadYearly} </span></li>
                                <li>Total no of house : <span style={{ 'color': 'green' }}>{societyDetail?.siteUnitCount} </span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
            <div className='row'>
                <div className="col-12">
                    <ListContainer
                        heading={"Budget List"}
                        dataList={budgetList}
                        showButton={false}
                        onRowClick={onRowClick}
                        hiddenColumn={['Society Name']}
                    />
                </div>
            </div>


        </div >
    );
};

export default SocietyBudget;