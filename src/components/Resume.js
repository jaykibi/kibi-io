import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends React.Component {
    
    render() {
        return (
            <div>
                <Document file="resume.pdf">
                    <div class="resume">
                        <Page pageNumber={1} />
                    </div>
                </Document>
            </div>
        );
    }
}

export default Resume; 