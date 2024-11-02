import { Tabs, Tab } from "@nextui-org/react";
import { EarnIcon } from "../icons/EarnIcon";
import { WalletIcon } from "../icons/WalletIcon";
import { FriendsIcon } from "../icons/FriendsIcon";
import { HomeIcon } from "../icons/HomeIcon";


export default function Menu() {
  return (
    <div className="w-full">
      <Tabs aria-label="Options" color="primary" variant="bordered" fullWidth>
          <Tab
            key="home"
            title={
              <div className="flex items-center space-x-2">
                <HomeIcon />
                <span>Home</span>
              </div>
            }
          />
          <Tab
            key="earn"
            title={
              <div className="flex items-center space-x-2">
                <EarnIcon />
                <span>Earn</span>
              </div>
            }
          />
          <Tab
            key="frinends"
            title={
              <div className="flex items-center space-x-2">
                <FriendsIcon />
                <span>Friends</span>
              </div>
            }
          />
          <Tab
            key="wallet"
            title={
              <div className="flex items-center space-x-2">
                <WalletIcon />
                <span>Wallet</span>
              </div>
            }
          />
      </Tabs>
    </div>
  );
}
