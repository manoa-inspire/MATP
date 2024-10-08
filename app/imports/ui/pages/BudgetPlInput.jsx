import React from 'react';
import { Button, Col, Container, Form, Row, Tooltip } from 'react-bootstrap';
import { QuestionCircle } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { PAGE_IDS } from '../utilities/PageIDs';

const investmentPortFolioTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to 5% of your investment portfolio.  5% is a rule that states that no stock should receive more than 5% of the investment portfolio.</Tooltip>
);

const revenuesTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to the total income generated by a company from its main works. </Tooltip>
);

const generalFundsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to the revenues from fees, interest earnings, and other sources accruing to the state to aid the state government in operation.</Tooltip>
);

const personnelTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to any and all expenses for employing and maintaining staff within a company. </Tooltip>
);

const programTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to costs related to running programs offered by a nonprofit organization for its mission.</Tooltip>
);

const contactsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to costs from specific contacts a business has spent money with over a period of time. </Tooltip>
);

const grantsTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to expenses for a project sponsored by a grant.</Tooltip>
);

const travelTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to expenses for travel.</Tooltip>
);

const equipmentTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to any expenses for equipment. </Tooltip>
);

const overheadTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to costs that support direct labor force but may not be tied to a specific contract.</Tooltip>
);

const debtServiceTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to debt that needs to be paid back over a period of time. </Tooltip>
);

const otherTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Any other expenses not listed. </Tooltip>
);

const managementTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to management of finances with excess (surplus) or shortfall (deficit) funds.</Tooltip>
);

const supportServicesTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to costs for managing nonprofit organizations. </Tooltip>
);

const beneficiaryAdvocacyTt = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>Refers to those who know and has the trust of the beneficiaries.</Tooltip>
);

const BudgetPlInput = () => (
  <div>
    <Container id={PAGE_IDS.BUDGET_PL_INPUT} className="input-data-background">
      <Row className="justify-content-center">
        <Col className="mx-auto">
          <Col className="text-center-heading">
            <h2>Budget P&L</h2>
          </Col>
          <Row className="input-data-width">
            <Col>
              <h5 id="top" className="section-title">Revenue</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
            <Col>
              <Form.Group>
                <Form.Label>5% of the Investment Portfolio { ' ' }
                  <OverlayTrigger placement="top" overlay={investmentPortFolioTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Revenues { ' ' }
                  <OverlayTrigger placement="top" overlay={revenuesTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>General Funds { ' ' }
                  <OverlayTrigger placement="top" overlay={generalFundsTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <hr className="separator" />

          <Row className="input-data-width margin-top-large margin-bottom-small">
            <Col>
              <h5 className="section-title">Expenses</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
            <Row className="margin-bottom-medium">
              <Col>
                <Form.Group className="width-quarter">
                  <Form.Label>Personnel { ' ' }
                    <OverlayTrigger placement="top" overlay={personnelTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Row className="input-data-width margin-y-medium">
                <Col>
                  <h5 className="section-title">Personnel & Fringe</h5>
                </Col>
              </Row>
              <Col>
                <Form.Group>
                  <Form.Label>Program { ' ' }
                    <OverlayTrigger placement="top" overlay={programTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Contacts { ' ' }
                    <OverlayTrigger placement="top" overlay={contactsTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Grants { ' ' }
                    <OverlayTrigger placement="top" overlay={grantsTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Travel { ' ' }
                    <OverlayTrigger placement="top" overlay={travelTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Equipment { ' ' }
                    <OverlayTrigger placement="top" overlay={equipmentTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Overhead { ' ' }
                    <OverlayTrigger placement="top" overlay={overheadTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Debt Service { ' ' }
                    <OverlayTrigger placement="top" overlay={debtServiceTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Other { ' ' }
                    <OverlayTrigger placement="top" overlay={otherTt}>
                      <QuestionCircle />
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Row>
          <hr className="separator" />

          <Row className="input-data-width margin-top-large margin-bottom-small">
            <Col>
              <h5 className="section-title">Surplus Deficit</h5>
            </Col>
          </Row>
          <Row className="input-data-width">
            <Col>
              <Form.Group>
                <Form.Label>Management { ' ' }
                  <OverlayTrigger placement="top" overlay={managementTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Support Services { ' ' }
                  <OverlayTrigger placement="top" overlay={supportServicesTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Beneficiary Advocacy { ' ' }
                  <OverlayTrigger placement="top" overlay={beneficiaryAdvocacyTt}>
                    <QuestionCircle />
                  </OverlayTrigger>
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center margin-top-medium">
            <Col xs="auto">
              <Button className="padding-x-large margin-all-large" type="button">Submit</Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button href="/auditedbalanceinput" className="px-4 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Balance Input</Button>
              <Button href="/audited" className="px-5 mx-5" type="button" style={{ backgroundColor: 'gray', borderColor: 'gray' }}>Audited Page</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BudgetPlInput;
