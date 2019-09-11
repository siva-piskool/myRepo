import * as React from "react";

export interface HelloProps { compiler: string; framework: string; name:string; }
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! by {this.props.name}</h1>;
    }
}