import Navbar from "@/app/components/navbar";
import SettingsPanel from "./components/settings-panel";
import FileUploadPanel from "./components/file-upload-panel";
import RecentHistoryPanel from "./components/recent-history-panel";

export default function Home() {
    return (
		<main className="">
			<Navbar />
			<div className="px-5 lg:px-40 py-5 flex flex-col lg:flex-row justify-evenly gap-5">
				<SettingsPanel />
				<FileUploadPanel />
				<RecentHistoryPanel />
			</div>
		</main>
    );
}
