import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface TradeState {
    // Define your state properties here
}

interface TradeAction {
    type: string;
    payload?: any;
}

const initialState: TradeState = {
    // Initialize your state properties here
};

const TradeContext = createContext<{
    state: TradeState;
    dispatch: React.Dispatch<TradeAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

const tradeReducer = (state: TradeState, action: TradeAction): TradeState => {
    switch (action.type) {
        // Define your reducer cases here
        default:
            return state;
    }
};

export const TradeProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(tradeReducer, initialState);

    return (
        <TradeContext.Provider value={{ state, dispatch }}>
            {children}
        </TradeContext.Provider>
    );
};

export const useTradeContext = () => {
    return useContext(TradeContext);
};