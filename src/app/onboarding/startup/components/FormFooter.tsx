// Sticky footer with Save Draft, auto-save indicator, and Submit button
const ArrowIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;

interface FormFooterProps {
    submitting: boolean;
    onSubmit: () => void;
}

export default function FormFooter({ submitting, onSubmit }: FormFooterProps) {
    return (
        <footer className="sticky bottom-0 z-40 bg-[rgba(248,250,252,0.92)] backdrop-blur-xl
      border-t border-slate-200/60 px-6 py-4">
            <div className="max-w-[780px] mx-auto flex items-center justify-end gap-4">

                {/* Submit */}
                <button
                    type="button"
                    onClick={onSubmit}
                    disabled={submitting}
                    aria-disabled={submitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-[0.625rem]
            bg-[#0B1220] text-white font-['DM_Sans'] font-semibold text-[0.95rem]
            hover:bg-[#111827] hover:shadow-[0_8px_24px_rgba(11,18,32,0.28)] hover:-translate-y-px
            disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0
            transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2">
                    {submitting
                        ? <><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting…</>
                        : <>Submit Startup Profile <ArrowIcon /></>
                    }
                </button>
            </div>
        </footer>
    );
}
