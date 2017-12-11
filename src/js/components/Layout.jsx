// src/components/Layout.js
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends PureComponent {
    render() {
        return (
            <header>
                <div className="slds-context-bar">
                    <nav className="slds-context-bar__secondary" role="navigation">
                        <ul className="slds-grid">
                            <li className="slds-context-bar__item">
                                <Link to={`/`} href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
                                    <span className="slds-truncate" title="Home">Fleet</span>
                                </Link>
                            </li>
                            <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover">
                                <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Ordenar Flota">
                                    <span className="slds-truncate" title="Ordenar Flota">Ordenar Flota</span>
                                </a>
                                <div className="slds-context-bar__icon-action slds-p-left_none">
                                    <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                                        <span className="slds-assistive-text">Open menu item submenu</span>
                                    </button>
                                </div>
                                <div className="slds-dropdown slds-dropdown_right">
                                    <ul className="slds-dropdown__list" role="menu">
                                        <li className="slds-dropdown__item" role="presentation">
                                            <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                                                <span className="slds-truncate" title="[object Object],Main action">
                                                    Nombre: A - Z</span>
                                            </a>
                                        </li>
                                        <li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
                                            <span className="slds-text-title_caps">Otros filtros</span>
                                        </li>
                                        <li className="slds-dropdown__item" role="presentation">
                                            <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                                                <span className="slds-truncate" title="Menu Item One">Nº de alarmas - Asc</span>
                                            </a>
                                        </li>
                                        <li className="slds-dropdown__item" role="presentation">
                                            <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                                                <span className="slds-truncate" title="Menu Item Two">Por Estado</span>
                                            </a>
                                        </li>
                                        <li className="slds-dropdown__item" role="presentation">
                                            <a href="javascript:void(0);" role="menuitem" tabIndex="-1">
                                                <span className="slds-truncate" title="Menu Item Three">Por Rendimiento</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="slds-context-bar__item">
                                <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Añadir Barco">
                                    <span className="slds-truncate" title="Añadir Barco">Añadir Barco</span>
                                </a>
                            </li>
                            <li className="slds-context-bar__item">
                                <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Eliminar Barco">
                                    <span className="slds-truncate" title="Eliminar Barco">Eliminar Barco</span>
                                </a>
                            </li>
                            <li className="slds-context-bar__item">
                                <a href="javascript:void(0);" className="slds-context-bar__label-action" title="Reportes">
                                    <span className="slds-truncate" title="Reportes">Reportes</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}