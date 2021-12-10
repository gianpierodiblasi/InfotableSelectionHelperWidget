/* global TW */
TW.IDE.Widgets.infotableselectionhelper = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/InfotableSelectionHelperWidget/ui/infotableselectionhelper/infotable.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'InfotableSelectionHelper',
      'description': 'Widget to simplify infotable selection management',
      'category': ['Common'],
      'defaultBindingTargetProperty': 'infotable',
      'iconImage': 'infotable.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'infotable': {
          'isVisible': true,
          'baseType': 'INFOTABLE',
          'isBindingTarget': true,
          'isEditable': false,
          'description': 'The infotable',
          'warnIfNotBoundAsTarget': true
        },
        'simplifiedMultipleSelection': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the simplified multiple selection (no CTRL/SHIFT keys needed)'
        },        
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        'eqZero': {
          'description': 'true if no row is selected',
          'isBindingSource': true,
          'baseType': 'BOOLEAN',
          'isEditable': false,
          'defaultValue': false
        },
        'eqOne': {
          'description': 'true if one and only one row is selected',
          'isBindingSource': true,
          'baseType': 'BOOLEAN',
          'isEditable': false,
          'defaultValue': false
        },
        'gtZero': {
          'description': 'true if at least one row is selected',
          'isBindingSource': true,
          'baseType': 'BOOLEAN',
          'isEditable': false,
          'defaultValue': false
        },
        'gtOne': {
          'description': 'true if more than one row is selected',
          'isBindingSource': true,
          'baseType': 'BOOLEAN',
          'isEditable': false,
          'defaultValue': false
        },
        'eqValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the number of selected rows is equal to the value set into the "value" property'
        },
        'gtValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the number of selected rows is greater than the value set into the "value" property'
        },
        'ltValue': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isBindingSource': true,
          'isEditable': false,
          'defaultValue': false,
          'description': 'true if the number of selected rows is less than the value set into the "value" property'
        },
        'value': {
          'isVisible': true,
          'baseType': 'NUMBER',
          'isBindingTarget': true,
          'isEditable': true,
          'description': 'The rows number to use as comparison for eqValue, gtValue and ltValue',
          'defaultValue': 0
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
      'SelectFirst': {'warnIfNotBound': false},
      'SelectNext': {'warnIfNotBound': false},
      'SelectPrevious': {'warnIfNotBound': false},
      'DeselectAll': {'warnIfNotBound': false},
      'SelectAll': {'warnIfNotBound': false}
    };
  };

  this.widgetEvents = function () {
    return {
      'EqZero': {},
      'EqOne': {},
      'GtZero': {},
      'GtOne': {},
      'EqValue': {},
      'GtValue': {},
      'LtValue': {}
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-infotableselectionhelper">' + '<span class="infotableselectionhelper-property">Infotable Selection Helper</span>' + '</div>';
  };
};