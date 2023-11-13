/// <reference types="react" />
/// <reference types="react-dom" />

import { ComponentType } from "react";

export type PageType<IP ={}, P = {}> = CommonComponentsType<IP, P>


/**
 * Types use by server components
 */
export type CommonComponentsType<IP = {}, P = {}> = ComponentType<P> & {
  getInitialProps?(ctx?: any): Promise<IP>;
};
