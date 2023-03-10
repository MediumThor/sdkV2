export declare enum ChainId {
    FUJI = 43113,
    AVALANCHE = 43114,
    WAGMI = 11111,
    COSTON = 16,
    SONGBIRD = 19,
    NEAR_MAINNET = 329847900,
    NEAR_TESTNET = 329847901
}
export declare enum StakingType {
    LEGACY = "LEGACY",
    SAR_POSITIONS = "SAR_POSITIONS",
    NEAR_STAKING = "NEAR_STAKING"
}
interface StakingContract {
    address: string;
    active: boolean;
    reward_token: string;
    type: StakingType;
}
export declare enum AirdropType {
    LEGACY = "LEGACY",
    MERKLE = "MERKLE",
    MERKLE_TO_STAKING = "MERKLE_TO_STAKING",
    NEAR_AIRDROP = "NEAR_AIRDROP"
}
interface AirdropContract {
    address: string;
    active: boolean;
    type: AirdropType;
}
export declare enum ChefType {
    MINI_CHEF = "MINI_CHEF",
    MINI_CHEF_V2 = "MINI_CHEF_V2",
    PANGO_CHEF = "PANGO_CHEF",
    NEAR_CHEF = "NEAR_CHEF"
}
interface ChefContract {
    address: string;
    active: boolean;
    type: ChefType;
}
export interface Chain {
    id: string;
    name: string;
    chain_id?: number;
    mainnet: boolean;
    evm: boolean;
    pangolin_is_live: boolean;
    tracked_by_debank: boolean;
    supported_by_gelato: boolean;
    rpc_uri: string;
    subgraph?: {
        exchange: string;
    };
    symbol: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    blockExplorerUrls?: string[];
    png_symbol?: string;
    logo?: string;
    coingecko_id?: string;
    debank_pangolin_id?: string;
    contracts?: {
        png: string;
        factory: string;
        router: string;
        router_daas?: string;
        wrapped_native_token: string;
        local_multisig?: string;
        community_treasury?: string;
        treasury_vester?: string;
        mini_chef?: ChefContract;
        timelock?: string;
        migrator?: string;
        airdrop?: AirdropContract;
        foundation_multisig?: string;
        joint_multisig?: string;
        revenue_distributor?: string;
        governor?: string;
        fee_collector?: string;
        multicall: string;
        staking?: StakingContract[];
    };
}
export declare const ETHEREUM_MAINNET: Chain;
export declare const ARBITRUM_MAINNET: Chain;
export declare const ARBITRUM_RINKEBY: Chain;
export declare const AURORA_MAINNET: Chain;
export declare const AURORA_TESTNET: Chain;
export declare const AVALANCHE_MAINNET: Chain;
export declare const AVALANCHE_FUJI: Chain;
export declare const BOBA_MAINNET: Chain;
export declare const BITTORRENT_MAINNET: Chain;
export declare const BITTORRENT_TESTNET: Chain;
export declare const BSC_MAINNET: Chain;
export declare const BSC_TESTNET: Chain;
export declare const CELO_MAINNET: Chain;
export declare const CELO_ALFAJORES_TESTNET: Chain;
export declare const CELO_BAKLAVA_TESTNET: Chain;
export declare const CRONOS_MAINNET: Chain;
export declare const CRONOS_TESTNET: Chain;
export declare const COSTON_TESTNET: Chain;
export declare const EVMOS_TESTNET: Chain;
export declare const EVMOS_MAINNET: Chain;
export declare const FANTOM_MAINNET: Chain;
export declare const FANTOM_TESTNET: Chain;
export declare const FUSE_MAINNET: Chain;
export declare const FUSE_TESTNET: Chain;
export declare const HARMONY_MAINNET: Chain;
export declare const HARMONY_TESTNET: Chain;
export declare const HECO_MAINNET: Chain;
export declare const HECO_TESTNET: Chain;
export declare const KLAYTN_MAINNET: Chain;
export declare const KLAYTN_BAOBAB: Chain;
export declare const METIS_MAINNET: Chain;
export declare const METIS_RINKEBY: Chain;
export declare const MOONRIVER_MAINNET: Chain;
export declare const MOONBEAM_MAINNET: Chain;
export declare const MOONBEAM_MOONBASE: Chain;
export declare const NEAR_MAINNET: Chain;
export declare const NEAR_TESTNET: Chain;
export declare const OEC_MAINNET: Chain;
export declare const OEC_TESTNET: Chain;
export declare const OP_MAINNET: Chain;
export declare const OP_KOVAN: Chain;
export declare const POLYGON_MAINNET: Chain;
export declare const POLYGON_MUMBAI: Chain;
export declare const SONGBIRD_CANARY: Chain;
export declare const FLARE_MAINNET: Chain;
export declare const WAGMI_FUJI_SUBNET: Chain;
export declare const XDAI_MAINNET: Chain;
export declare const EWC_MAINNET: Chain;
export declare const EWC_TESTNET: Chain;
export declare const IOTEX_MAINNET: Chain;
export declare const IOTEX_TESTNET: Chain;
export declare const ASTAR_MAINNET: Chain;
export declare const SHIDEN_MAINNET: Chain;
export declare const SHIBUYA_TESTNET: Chain;
export declare const TELOS_MAINNET: Chain;
export declare const TELOS_TESTNET: Chain;
export declare const OASIS_MAINNET: Chain;
export declare const OASIS_TESTNET: Chain;
export declare const GODWOKEN_MAINNET: Chain;
export declare const GODWOKEN_TESTNET: Chain;
export declare const CHAINS: {
    [chainId in ChainId]: Chain;
};
export declare const ALL_CHAINS: Chain[];
export {};
