import React from "react";
import { Routes, Route } from "react-router-dom";
import {
RoadsideAssistanceCreate, RoadsideAssistanceEdit, RoadsideAssistanceView, 
RoadsideAssistanceInfoForm
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="RoadsideAssistances/view/:id" element={<RoadsideAssistanceView {...props} title={'View RoadsideAssistance'} />} />
                        <Route path="RoadsideAssistances/edit/:id" element={<RoadsideAssistanceEdit {...props} title={'Edit RoadsideAssistance'} />} />
                        <Route path="RoadsideAssistances/create" element={<RoadsideAssistanceCreate {...props} title={'Create RoadsideAssistance'} />} />

                <Route path="/infoformenter" element={<RoadsideAssistanceInfoForm {...props} title={'Info form to enter info'} />} />
        </Routes>
    )

};

export default Component;