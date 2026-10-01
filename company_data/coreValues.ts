import { coreValue } from "@/app/types/coreValue";
import {
	BarChart3,
	Handshake,
	Headphones,
	Medal,
	Scale,
	ShieldCheck,
} from "lucide-react";

export const coreValues: coreValue[] = [
	{
		title: "Reliability",
		description: "We deliver on our commitments with consistency and dependability.",
		icon: ShieldCheck,
	},
	{
		title: "Quality",
		description: "We source and supply products that meet international standards and client expectations.",
		icon: Medal,
	},
	{
		title: "Integrity",
		description: "We conduct business with transparency, honesty, and strong ethical values.",
		icon: Scale,
	},
	{
		title: "Responsiveness",
		description: "We respond quickly and effectively to our clients' needs at every stage.",
		icon: Headphones,
	},
	{
		title: "Partnership",
		description: "We build long-term relationships based on trust, collaboration, and shared success.",
		icon: Handshake,
	},
	{
		title: "Continuous Improvement",
		description: "We continuously improve our processes, solutions, and services to create greater value.",
		icon: BarChart3,
	},
];
