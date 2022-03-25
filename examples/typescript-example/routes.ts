// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.'
// Run `yarn nextjs-routes` to regenerate this file.

import { useRouter as useNextRouter } from "next/router";
import NextLink from "next/link";
import type { NextUrl, Router, RouteLink } from "nextjs-routes";

export const useRouter: () => Router<Routes> = useNextRouter;

export const Link: RouteLink<Routes> = NextLink;

export type Routes = NextUrl<"/api/hello"> | NextUrl<"/index">;

export const Route = {
  ApiHello: function <Url extends NextUrl<"/api/hello">>(
    opts?: Omit<Url, "pathname">
  ): Url {
    return { pathname: "/api/hello", ...opts } as Url;
  },
  Index: function <Url extends NextUrl<"/index">>(
    opts?: Omit<Url, "pathname">
  ): Url {
    return { pathname: "/index", ...opts } as Url;
  },
} as const;