
"use client";

import { useEffect, useRef, useCallback } from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    Car,
    Calculator,
    Calendar,
    MapPin,
    BarChart3,
    ArrowUpIcon,
    Paperclip,
    PlusIcon,
    Zap,
    Battery,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
    minHeight: number;
    maxHeight?: number;
}

function useAutoResizeTextarea({
    minHeight,
    maxHeight,
}: UseAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(
        (reset?: boolean) => {
            const textarea = textareaRef.current;
            if (!textarea) return;

            if (reset) {
                textarea.style.height = `${minHeight}px`;
                return;
            }

            // Temporarily shrink to get the right scrollHeight
            textarea.style.height = `${minHeight}px`;

            // Calculate new height
            const newHeight = Math.max(
                minHeight,
                Math.min(
                    textarea.scrollHeight,
                    maxHeight ?? Number.POSITIVE_INFINITY
                )
            );

            textarea.style.height = `${newHeight}px`;
        },
        [minHeight, maxHeight]
    );

    useEffect(() => {
        // Set initial height
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = `${minHeight}px`;
        }
    }, [minHeight]);

    // Adjust height on window resize
    useEffect(() => {
        const handleResize = () => adjustHeight();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}

export function UnityFleetAIChat() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 60,
        maxHeight: 200,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (value.trim()) {
                setValue("");
                adjustHeight(true);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8">
            <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto neumorphic-card rounded-3xl flex items-center justify-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9b87f5] via-[#7c3aed] to-[#6366f1] flex items-center justify-center shadow-inner">
                        <Zap className="h-6 w-6 text-white" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold text-white">
                    How can I help with your Tesla journey?
                </h1>
                <p className="text-white/70 text-lg">
                    Ask about vehicles, pricing, bookings, or charging stations
                </p>
            </div>

            <div className="w-full">
                <div className="relative neumorphic-card rounded-2xl border border-white/10 backdrop-blur-xl">
                    <div className="overflow-y-auto">
                        <Textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                adjustHeight();
                            }}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about Tesla models, pricing, or book your ride..."
                            className={cn(
                                "w-full px-6 py-4",
                                "resize-none",
                                "bg-transparent",
                                "border-none",
                                "text-white text-base",
                                "focus:outline-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                "placeholder:text-white/50 placeholder:text-base",
                                "min-h-[60px]"
                            )}
                            style={{
                                overflow: "hidden",
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between p-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="group neumorphic-button p-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Paperclip className="w-4 h-4 text-white/70" />
                                <span className="text-xs text-white/50 hidden group-hover:inline transition-opacity">
                                    Attach
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-xl text-sm text-white/70 transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/5 flex items-center gap-2"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Context
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center gap-2",
                                    value.trim()
                                        ? "bg-gradient-to-r from-[#9b87f5] to-[#7c3aed] text-white border-transparent shadow-lg"
                                        : "text-white/70 hover:bg-white/5"
                                )}
                            >
                                <ArrowUpIcon
                                    className={cn(
                                        "w-4 h-4",
                                        value.trim()
                                            ? "text-white"
                                            : "text-white/70"
                                    )}
                                />
                                <span className="sr-only">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <TeslaActionButton
                        icon={<Car className="w-4 h-4" />}
                        label="Find My Perfect Tesla"
                    />
                    <TeslaActionButton
                        icon={<Calculator className="w-4 h-4" />}
                        label="Calculate Subscription"
                    />
                    <TeslaActionButton
                        icon={<Calendar className="w-4 h-4" />}
                        label="Book Test Drive"
                    />
                    <TeslaActionButton
                        icon={<MapPin className="w-4 h-4" />}
                        label="Find Charging Stations"
                    />
                    <TeslaActionButton
                        icon={<BarChart3 className="w-4 h-4" />}
                        label="Compare Models"
                    />
                </div>
            </div>
        </div>
    );
}

interface TeslaActionButtonProps {
    icon: React.ReactNode;
    label: string;
}

function TeslaActionButton({ icon, label }: TeslaActionButtonProps) {
    return (
        <button
            type="button"
            className="group flex items-center gap-3 px-4 py-3 neumorphic-button rounded-2xl text-white/80 hover:text-white transition-all duration-300 hover:neumorphic-hover"
        >
            <div className="text-[#9b87f5] group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}
