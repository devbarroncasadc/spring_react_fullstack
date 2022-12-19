import { RouteProps } from "react-router";
import { RouteType } from "../types";

interface AppRouteProps extends RouteProps {
    component: any,
    routeType: RouteType
}

const AppRoute = (props: AppRouteProps) => {
    const { component: Component, path, routeType, ...rest } = props;
}

export default AppRoute;