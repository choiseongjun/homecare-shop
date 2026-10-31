import type {MetadataRoute} from "next";
import {apartmentRegions,apartments,aptServices} from "@/lib/apartments";
import {cases,posts,regions,services,SITE} from "../lib/site";

export default function sitemap():MetadataRoute.Sitemap{const aptPaths=["/apt",...apartmentRegions.map(region=>`/apt/region/${region.slug}`),...apartments.flatMap(apt=>[`/apt/${apt.code}`,...apt.sizes.flatMap(size=>[`/apt/${apt.code}/${size}`,...Object.keys(aptServices).map(service=>`/apt/${apt.code}/${size}/${service}`)])])];const paths=["","/technicians","/register/technician","/price","/estimate","/cases","/blog",...aptPaths,...services.map(s=>`/${s.slug}`),...cases.map(c=>`/cases/${c.slug}`),...posts.map(p=>`/blog/${p.slug}`),...Object.keys(regions).map(r=>`/regions/${r}`)];return paths.map(p=>({url:`${SITE.url}${p}`,lastModified:new Date(),changeFrequency:p.startsWith("/apt")?"monthly":"weekly",priority:p===""?1:p==="/apt"?0.95:p.startsWith("/apt/region/")?0.9:p.split("/").length>=6?0.75:0.8}))}
