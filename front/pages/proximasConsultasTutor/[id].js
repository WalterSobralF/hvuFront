import React from 'react';
import {Header03} from "../../src/components/Header";
import {SegundaHeader01} from "../../src/components/AnotherHeader/anotherHeader";
import ProximasConsultasTutor from "../../src/components/ProximasConsultasTutor/proximasConsultasTutor";
import Footer from "../../src/components/Footer";

function ProximasConsultasTutorPage() {
    return (
        <>
        <div>
            < Header03 />
        </div>
        <div>
            < SegundaHeader01 />
        </div>
        <div>
            < ProximasConsultasTutor />
        </div>
        <div>
            < Footer />
        </div>
        </>
    );
}

export default ProximasConsultasTutorPage