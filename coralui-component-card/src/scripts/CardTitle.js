/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2017 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

import Component from 'coralui-mixin-component';

const CLASSNAME = 'coral3-Card-title';

/**
 @class Coral.Card.Title
 @classdesc A Card title component
 @htmltag coral-card-title
 @extends HTMLElement
 @extends Coral.mixin.component
 */
class CardTitle extends Component(HTMLElement) {
  constructor() {
    super();
  }
  
  /**
   The title's content zone.
   
   @type {HTMLElement}
   @contentzone
   @memberof Coral.Card.Title#
   */
  get content() {
    return this;
  }
  set content(value) {
    // Support configs
    if (typeof value === 'object') {
      for (const prop in value) {
        this[prop] = value[prop];
      }
    }
  }
  
  connectedCallback() {
    super.connectedCallback();
    
    this.classList.add(CLASSNAME);
  }
}

export default CardTitle;