import React from 'react'
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const Styles = styled.div`

.row{
    margin-left: 0;
}

`;


export const Work = () => (
    <Styles>
        <div>
            <h1>
                Work
        </h1>
            <hr className="border-top justify-content-between p-3" />
            <Row>
                <h2>
                    Software / Web Development
            </h2>

            </Row>
            <Row>
                <h2>
                    Digital Marketing / Mangement
            </h2>
            </Row>
        </div>
    </Styles>
)