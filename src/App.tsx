import React from 'react';
import './App.css';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';

class App extends React.Component {
  openURLInNewPage(args : any) {
    if(args.element.children[0]){
      args.element.children[0].target = "_blank";
    }
  } 
  appendArrowIcon() {
    return(<span className="e-bicons e-arrow"></span>);
  }
  render() {
    return (
      <BreadcrumbComponent beforeItemRender={this.openURLInNewPage.bind(this)}
      enableActiveItemNavigation={true} maxItems={3} overflowMode="Wrap"
      separatorTemplate={this.appendArrowIcon.bind(this)} enableNavigation={false}>
      <BreadcrumbItemsDirective>
      <BreadcrumbItemDirective text="Home" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/introduction'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Breadcrumb" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/getting-started'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Icons" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/icons'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Navigations" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/navigation'></BreadcrumbItemDirective>
      <BreadcrumbItemDirective text="Overflow" url='https://ej2.syncfusion.com/react/documentation/breadcrumb/overflow-mode'></BreadcrumbItemDirective>
      </BreadcrumbItemsDirective> 
      
      </BreadcrumbComponent>
    );
  }
}
   

export default App;