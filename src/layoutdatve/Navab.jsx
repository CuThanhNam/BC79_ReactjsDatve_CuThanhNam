import React from 'react'

export default function Navab() {
  return (
    <div>
        <div className='pull-right toggle-right-sidebar'>
            <span className='fa title-open-right-sidebar tooltipstered'><i class="fa fa-angle-double-right"></i></span>
        </div>
        <div id='right-sidebar'className='right-sidebar-notifcations nav-collapse'>
            <div className='bs-example bs-example-tabs right-sidebar-tab-notifcation' data-example-id="togglable-tabs">
                <div id='w3lDemoBar' className='w3l-demo-bar'>
                    <div className='demo-btns'>
                        <a href="https://w3layouts.com/template/movie-seat-selection-flat-responsive-widget-template/">
                        <span className='w3l-icon -back'>
                            <span className='fa fa-arrow-left'>
                            </span>
                        </span>
                        <span className='w3l-text'>Back</span>
                        </a>
                        <a href="https://w3layouts.com/template/movie-seat-selection-flat-responsive-widget-template/">
                        <span className='w3l-icon -download'>
                            <span className='fa fa-download'>
                            </span>
                        </span>
                        <span className='w3l-text'>Download</span>
                        </a>
                        <a href="https://w3layouts.com/checkout/?add-to-cart=45443" className='no-margin-bottom-mobile'>
                        <span className='w3l-icon -buy'>
                            <span className='fa fa-shopping-cart'></span>
                        </span>
                        <span className='w3l-text'>Buy</span>
                        </a>
                    </div>
                </div>
                <div className='right-sidebar-panel-content animated fadeInRight' tabIndex="5003" style={{overflow: 'hidden', outline: 'none'}} ></div>
            </div>
        </div>
    </div>
  )
}
