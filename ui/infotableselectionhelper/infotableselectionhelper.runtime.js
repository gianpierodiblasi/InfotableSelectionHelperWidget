/* global TW */
TW.Runtime.Widgets.infotableselectionhelper = function () {
  var thisWidget = this;
  var currentSelectedRowNumber;
  var currentSelectedRowIndices = [];

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-infotableselectionhelper" style="display:none;"></div>';
    return html;
  };

  this.serviceInvoked = function (serviceName) {
    var infotable = thisWidget.getProperty('infotable');
    if (infotable && infotable.rows) {
      if (serviceName === 'SelectFirst') {
        thisWidget.updateSelection('infotable', [0]);
        this.checkSelectedRows([0]);
      } else if (serviceName === 'SelectNext' && currentSelectedRowNumber < infotable.rows.length - 1) {
        thisWidget.updateSelection('infotable', [currentSelectedRowNumber + 1]);
        this.checkSelectedRows([currentSelectedRowNumber + 1]);
      } else if (serviceName === 'SelectPrevious' & currentSelectedRowNumber > 0) {
        thisWidget.updateSelection('infotable', [currentSelectedRowNumber - 1]);
        this.checkSelectedRows([currentSelectedRowNumber - 1]);
      } else if (serviceName === 'DeselectAll') {
        thisWidget.updateSelection('infotable', []);
        this.checkSelectedRows([]);
      } else if (serviceName === 'SelectAll') {
        var all = [...infotable.rows.keys()];
        thisWidget.updateSelection('infotable', all);
        this.checkSelectedRows(all);
      }
    }
  };

  this.handleSelectionUpdate = function (propertyName, selectedRows, selectedRowIndices) {
    if (propertyName === "infotable") {
      var simplifiedMultipleSelection = thisWidget.getProperty('simplifiedMultipleSelection');
      if (simplifiedMultipleSelection) {
        var intersection = currentSelectedRowIndices.filter(value => selectedRowIndices.includes(value)).length > 0;

        if (intersection) {
          selectedRowIndices = currentSelectedRowIndices.filter((item, pos) => selectedRowIndices.indexOf(item) === -1);
        } else {
          selectedRowIndices = currentSelectedRowIndices.concat(selectedRowIndices).sort();
          selectedRowIndices = selectedRowIndices.filter((item, pos) => selectedRowIndices.indexOf(item) === pos);
        }

        thisWidget.updateSelection('infotable', selectedRowIndices);
        this.checkSelectedRows(selectedRowIndices);
      } else {
        this.checkSelectedRows(selectedRowIndices);
      }
    }
  };

  this.updateProperty = function (updatePropertyInfo) {
    if (updatePropertyInfo.TargetProperty === 'infotable') {
      this.setProperty("infotable", updatePropertyInfo.RawSinglePropertyValue);

      var infotable = thisWidget.getProperty('infotable');
      var debugMode = thisWidget.getProperty('debugMode');

      if (debugMode) {
        console.log("InfotableSelectionHelper - infotable = ");
        console.log(infotable);
      }

      setTimeout(() => thisWidget.updateSelection('infotable', updatePropertyInfo.SelectedRowIndices), 100);
      this.checkSelectedRows(updatePropertyInfo.SelectedRowIndices);
    } else if (updatePropertyInfo.TargetProperty === 'value') {
      this.setProperty("value", updatePropertyInfo.RawSinglePropertyValue);
    }
  };

  this.checkSelectedRows = function (selectedRowIndices) {
    var debugMode = thisWidget.getProperty('debugMode');
    var value = thisWidget.getProperty('value');

    var rowCount = 0;
    if (selectedRowIndices && selectedRowIndices.length > 0) {
      rowCount = selectedRowIndices.length;
      currentSelectedRowNumber = selectedRowIndices[0];
      currentSelectedRowIndices = selectedRowIndices;
    } else {
      rowCount = 0;
      currentSelectedRowNumber = null;
      currentSelectedRowIndices = [];
    }

    thisWidget.setProperty('eqZero', rowCount === 0);
    thisWidget.setProperty('eqOne', rowCount === 1);
    thisWidget.setProperty('gtZero', rowCount > 0);
    thisWidget.setProperty('gtOne', rowCount > 1);
    thisWidget.setProperty('eqValue', rowCount === value);
    thisWidget.setProperty('gtValue', rowCount > value);
    thisWidget.setProperty('ltValue', rowCount < value);

    if (debugMode) {
      console.log("InfotableSelectionHelper - rowCount = " + rowCount);
    }

    if (rowCount === 0) {
      thisWidget.jqElement.triggerHandler('EqZero');
    }
    if (rowCount === 1) {
      thisWidget.jqElement.triggerHandler('EqOne');
    }
    if (rowCount > 0) {
      thisWidget.jqElement.triggerHandler('GtZero');
    }
    if (rowCount > 1) {
      thisWidget.jqElement.triggerHandler('GtOne');
    }
    if (rowCount === value) {
      thisWidget.jqElement.triggerHandler('EqValue');
    }
    if (rowCount > value) {
      thisWidget.jqElement.triggerHandler('GtValue');
    }
    if (rowCount < value) {
      thisWidget.jqElement.triggerHandler('LtValue');
    }
  };
};