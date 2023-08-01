import React from "react";
import { IoniconBBuild } from "../../components/IoniconBBuild";
import { IoniconCCard } from "../../components/IoniconCCard";
import { IoniconCCart } from "../../components/IoniconCCart";
import { IoniconDDocument } from "../../components/IoniconDDocument";
import { IoniconDDocumentWrapper } from "../../components/IoniconDDocumentWrapper";
import { IoniconHHome } from "../../components/IoniconHHome";
import { IoniconN } from "../../components/IoniconN";
import { IoniconPPerson } from "../../components/IoniconPPerson";
import { IoniconSSettings } from "../../components/IoniconSSettings";
import { IoniconSStats } from "../../components/IoniconSStats";
import { IoniconWWallet } from "../../components/IoniconWWallet";
import { ProgressBarInfo } from "../../components/ProgressBarInfo";
import { ProgressBarWarning } from "../../components/ProgressBarWarning";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="overlap">
        <img
          className="background"
          alt="Background"
          src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/background.png"
        />
        <img
          className="image"
          alt="Image"
          src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/image@2x.png"
        />
        <div className="div-2">
          <div className="chart-bar-chart">
            <div className="group-copy">
              <div className="overlap-group">
                <div className="text-wrapper-2">PERFORMANCE</div>
                <div className="total-orders">Total de vendas</div>
                <div className="overlap-2">
                  <img
                    className="line"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-1-2.svg"
                  />
                  <img
                    className="img"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-2.svg"
                  />
                  <img
                    className="line-2"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-3.svg"
                  />
                  <img
                    className="line-3"
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-4-1.svg"
                  />
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                  <div className="rectangle-5" />
                  <div className="rectangle-6" />
                  <div className="months-and-values">
                    <div className="text-wrapper-3">30</div>
                    <div className="text-wrapper-4">20</div>
                    <div className="text-wrapper-5">10</div>
                    <div className="text-wrapper-6">0</div>
                    <div className="text-wrapper-7">Jul</div>
                    <div className="aug">Ago</div>
                    <div className="sep">Set</div>
                    <div className="oct">Out</div>
                    <div className="text-wrapper-8">Nov</div>
                    <div className="dec">Dez</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tables-card-table">
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="BG" />
                <div className="rows">
                  <div className="row">
                    <img
                      className="line-4"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--9.svg"
                    />
                    <div className="title">Iphone 15 Pro</div>
                    <div className="visitors">1,795</div>
                    <div className="unique-users">190</div>
                    <div className="bounce-rate">46,53%</div>
                    <div className="fontawesome"></div>
                  </div>
                  <div className="row-2">
                    <img
                      className="line-4"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--8.svg"
                    />
                    <div className="title-2">Teclado Mecanico Ryzer</div>
                    <div className="visitors-2">2,050</div>
                    <div className="unique-users-2">147</div>
                    <div className="bounce-rate-2">50,87%</div>
                    <div className="fontawesome-2"></div>
                  </div>
                  <div className="row-3">
                    <img
                      className="line-4"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--7.svg"
                    />
                    <div className="title-3">Hp Portateis</div>
                    <div className="visitors-3">3,513</div>
                    <div className="unique-users-3">294</div>
                    <div className="bounce-rate-3">36,49%</div>
                    <div className="fontawesome-3"></div>
                  </div>
                  <div className="row-4">
                    <img
                      className="line-4"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--6.svg"
                    />
                    <div className="title-4">Macbooks</div>
                    <div className="visitors-4">3,985</div>
                    <div className="unique-users-4">319</div>
                    <div className="bounce-rate-4">46,53%</div>
                    <div className="fontawesome-4"></div>
                  </div>
                  <div className="row-5">
                    <img
                      className="line-4"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--5.svg"
                    />
                    <div className="title-5">Impressoras</div>
                    <div className="visitors-5">4,569</div>
                    <div className="unique-users-5">340</div>
                    <div className="bounce-rate-5">46,53%</div>
                    <div className="fontawesome-5"></div>
                  </div>
                </div>
                <div className="header">
                  <div className="overlap-group-2">
                    <div className="rectangle-7" />
                    <img
                      className="line-5"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-1-1.svg"
                    />
                    <div className="text-wrapper-9">Nome do Produto</div>
                    <div className="VISITORS">Quantidade</div>
                    <div className="UNIQUE-USERS">Clientes por venda</div>
                    <div className="BOUNCE-RATE">Balanço em percentagem</div>
                  </div>
                </div>
                <div className="button">
                  <div className="div-wrapper">
                    <div className="text">Mais</div>
                  </div>
                </div>
                <div className="title-6">Produtos Mais Vendidos</div>
              </div>
            </div>
          </div>
          <div className="tables-card-table-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-4">
                <div className="BG-2" />
                <div className="rows-2">
                  <div className="row-6">
                    <img
                      className="line-6"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--4.svg"
                    />
                    <div className="title">Food.ao</div>
                    <div className="visitors-6">2,645</div>
                    <ProgressBarWarning
                      barOnClassName="progress-bar-warning-instance"
                      className="design-component-instance-node"
                      elementClassName="design-component-instance-node-2"
                      progressBarClassName="design-component-instance-node-3"
                      text="30%"
                    />
                  </div>
                  <div className="row-7">
                    <img
                      className="line-6"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--3.svg"
                    />
                    <div className="title-2">Brute Design</div>
                    <div className="visitors-7">3,678</div>
                    <ProgressBarInfo
                      barOnClassName="progress-bar-info-instance"
                      className="design-component-instance-node"
                      elementClassName="design-component-instance-node-2"
                      progressBarClassName="design-component-instance-node-3"
                      text="75%"
                    />
                  </div>
                  <div className="row-8">
                    <img
                      className="line-6"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--2.svg"
                    />
                    <div className="title-3">HotShoppe</div>
                    <div className="visitors-8">4,807</div>
                    <ProgressBarInfo
                      barOnClassName="progress-bar-info-instance"
                      className="design-component-instance-node"
                      elementClassName="design-component-instance-node-2"
                      progressBarClassName="design-component-instance-node-3"
                      text="80%"
                    />
                  </div>
                  <div className="row-9">
                    <img
                      className="line-6"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line--1.svg"
                    />
                    <div className="title-4">JovensNet</div>
                    <div className="visitors-9">5,480</div>
                    <ProgressBarWarning
                      barOnClassName="progress-bar-warning-instance"
                      className="design-component-instance-node"
                      elementClassName="design-component-instance-node-2"
                      progressBarClassName="design-component-instance-node-3"
                      text="70%"
                    />
                  </div>
                  <div className="row-10">
                    <img
                      className="line-6"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-.svg"
                    />
                    <div className="title-5">Tech.ink</div>
                    <div className="visitors-10">1,480</div>
                    <ProgressBarWarning
                      barOnClassName="progress-bar-warning-instance"
                      className="design-component-instance-node"
                      elementClassName="design-component-instance-node-2"
                      progressBarClassName="design-component-instance-node-3"
                      text="60%"
                    />
                  </div>
                </div>
                <div className="button-2">
                  <div className="div-wrapper">
                    <div className="text-2">Mais</div>
                  </div>
                </div>
                <div className="header-2">
                  <div className="overlap-5">
                    <div className="rectangle-8" />
                    <img
                      className="line-7"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-1.svg"
                    />
                    <div className="text-wrapper-9">Nome</div>
                    <div className="VISITORS-2">Visitantes</div>
                  </div>
                </div>
                <div className="title-6">Lojas</div>
              </div>
            </div>
          </div>
          <div className="second-card">
            <div className="text-3">
              <div className="text-wrapper-10">Revisão das Vendas</div>
            </div>
            <div className="graph">
              <div className="data">
                <div className="horizontal">
                  <div className="text-wrapper-11">Dec</div>
                  <div className="text-wrapper-12">Nov</div>
                  <div className="text-wrapper-13">Oct</div>
                  <div className="text-wrapper-14">Sep</div>
                  <div className="text-wrapper-15">Aug</div>
                  <div className="text-wrapper-16">Jul</div>
                  <div className="text-wrapper-17">Jun</div>
                  <div className="text-wrapper-18">May</div>
                  <div className="text-wrapper-19">Apr</div>
                  <div className="text-wrapper-20">Mar</div>
                  <div className="text-wrapper-21">Feb</div>
                  <div className="text-wrapper-22">Jan</div>
                </div>
                <div className="div-3">
                  <div className="div-3">
                    <div className="text-wrapper-23">0</div>
                    <div className="text-wrapper-24">100</div>
                    <div className="text-wrapper-25">200</div>
                    <div className="text-wrapper-26">300</div>
                    <div className="text-wrapper-27">400</div>
                    <div className="text-wrapper-22">500</div>
                    <div className="lines">
                      <img
                        className="line-8"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-9.svg"
                      />
                      <img
                        className="line-9"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-8.svg"
                      />
                      <img
                        className="line-10"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-8.svg"
                      />
                      <img
                        className="line-11"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-8.svg"
                      />
                      <img
                        className="line-12"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-8.svg"
                      />
                      <img
                        className="line-13"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/line-4.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="lines-2"
                    alt="Lines"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/lines.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first-cards">
          <div className="TOTAL-SALES">
            <div className="title-7">TOTAL SALES</div>
            <div className="element-2">+8.12%</div>
            <div className="text-wrapper-28">$173,000</div>
            <div className="time">Since last month</div>
            <div className="div-4">
              <div className="overlap-group-3">
                <img
                  className="oval"
                  alt="Oval"
                  src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-5.svg"
                />
                <div className="rectangle-9" />
                <IoniconCCart
                  className="design-component-instance-node-4"
                  ioniconCCart="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-c-cart-default-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="NEW-CLIENTS">
            <div className="title-7">Novos Clientes</div>
            <div className="element-3">-2.82%</div>
            <div className="text-wrapper-28">+10</div>
            <div className="time">do que mes anterior</div>
            <div className="div-4">
              <div className="icon">
                <div className="overlap-group-3">
                  <img
                    className="oval"
                    alt="Oval"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-5.svg"
                  />
                  <div className="rectangle-9" />
                </div>
              </div>
              <IoniconPPerson
                className="ionicon-p-person-default"
                ioniconPPerson="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-p-person-default-1.svg"
              />
            </div>
          </div>
          <div className="TODAYS-MONEY">
            <div className="title-7">Faturação Hoje</div>
            <div className="element-2">+3.48%</div>
            <div className="text-wrapper-28">53.897.00 kz</div>
            <div className="time">do que ontem</div>
            <div className="div-4">
              <div className="overlap-group-3">
                <img
                  className="oval"
                  alt="Oval"
                  src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-5.svg"
                />
                <div className="rectangle-9" />
                <IoniconWWallet
                  className="design-component-instance-node-4"
                  ioniconWWallet="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-w-wallet-default-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="first-cards-2">
          <div className="TOTAL-SALES">
            <div className="title-7">TOTAL SALES</div>
            <div className="element-2">+8.12%</div>
            <div className="text-wrapper-28">$173,000</div>
            <div className="time">Since last month</div>
            <div className="div-4">
              <div className="ionicon-c-cart-wrapper">
                <IoniconCCart
                  className="design-component-instance-node-4"
                  ioniconCCart="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-2@2x.png"
                />
              </div>
              <div className="rectangle-9" />
            </div>
          </div>
          <div className="NEW-CLIENTS">
            <div className="title-7">Novos Produtos</div>
            <div className="element-4">+2.82%</div>
            <div className="text-wrapper-28">+40</div>
            <div className="time">Since last month</div>
            <div className="div-4">
              <div className="overlap-group-3">
                <img
                  className="oval"
                  alt="Oval"
                  src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-5.svg"
                />
                <div className="rectangle-9" />
                <IoniconDDocument
                  className="design-component-instance-node-4"
                  ioniconDDocument="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-d-document-text.svg"
                />
              </div>
            </div>
          </div>
          <div className="TODAYS-MONEY">
            <div className="title-7">Faturação Mensal</div>
            <div className="element-5">-3.48%</div>
            <div className="text-wrapper-28">553.897.00 kz</div>
            <div className="time">do que mês anterior</div>
            <div className="div-4">
              <div className="overlap-group-3">
                <img
                  className="oval"
                  alt="Oval"
                  src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/oval-5.svg"
                />
                <div className="rectangle-9" />
                <IoniconWWallet
                  className="design-component-instance-node-4"
                  ioniconWWallet="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-w-wallet-default-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="button-base">
            <div className="width-structure">
              <div className="height-structure">
                <div className="button-body">
                  <div className="text-4">Renove a sua Assinatura</div>
                </div>
              </div>
              <div className="min-width">
                <div className="content" />
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="profile">
              <IoniconPPerson
                className="ionicon-p-person-instance"
                ioniconPPerson="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-p-person-default.svg"
              />
              <div className="text-wrapper-29">Perfil</div>
            </div>
            <div className="text-wrapper-30">Paginas da Conta</div>
            <div className="RTL">
              <IoniconBBuild
                className="design-component-instance-node-5"
                ioniconBBuild="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-b-build-default.svg"
              />
              <div className="text-wrapper-31">Clientes</div>
            </div>
            <div className="billing">
              <IoniconCCard
                className="ionicon-c-card-default"
                ioniconCCard="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-c-card-default.svg"
              />
              <div className="text-wrapper-32">Vendas</div>
            </div>
            <div className="tables">
              <div className="text-wrapper-33">Produtos</div>
            </div>
            <div className="tables-2">
              <IoniconSStats
                className="design-component-instance-node-5"
                ioniconSStats="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-s-stats-chart.svg"
              />
              <div className="text-wrapper-34">Relatorios</div>
            </div>
            <div className="overlap-group-wrapper-2">
              <div className="overlap-group-4">
                <div className="ionicon-h-home-wrapper">
                  <IoniconHHome
                    className="ionicon-h-home-default"
                    ioniconHHome="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-h-home-default.svg"
                  />
                </div>
                <div className="text-wrapper-35">Dashboard</div>
              </div>
            </div>
          </div>
          <img
            className="vector"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/vector-6.svg"
          />
        </div>
        <IoniconDDocumentWrapper
          className="ionicon-d-document-default"
          ioniconDDocument="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-d-document-default.svg"
        />
        <div className="breadcrumb">
          <div className="menu-2">
            <div className="input-withaddons">
              <div className="auto-added-frame">
                <div className="addon">
                  <img
                    className="icon-2"
                    alt="Icon"
                    src="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/icon.svg"
                  />
                </div>
              </div>
              <div className="input-fieldtext">
                <div className="text-wrapper-36">Busque alguma coisa</div>
                <div className="content-wrapper">
                  <div className="content-2" />
                </div>
              </div>
            </div>
            <IoniconSSettings
              className="ionicon-s-settings-sharp"
              ioniconSSettings="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-s-settings-sharp.svg"
            />
            <IoniconN
              className="ionicon-n-notifications-default"
              ioniconN="https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-n-notifications-default-1.svg"
            />
          </div>
          <div className="text-5">
            <div className="text-wrapper-37">Dashboard</div>
            <p className="paginas-dashboard">
              <span className="span">Paginas </span>
              <span className="text-wrapper-38">&nbsp;</span>
              <span className="span">/&nbsp;&nbsp;Dashboard</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper-39">Sign out</div>
      </div>
      <div className="footer-menu">
        <div className="copyright">
          <div className="text-wrapper-40">@ 2023 Edmauro Goma</div>
        </div>
      </div>
    </div>
  );
};
