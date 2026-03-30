import transactionsData from "@/data/transactions.json";
import accountsData from "@/data/accounts.json";
import cardsData from "@/data/cards.json";
import notificationsData from "@/data/notifications.json";
import type { Transaction, Account, Card, Notification } from "@/types";

// Simulate API delay
function delay<T>(data: T, ms = 600): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export function getTransactions(userId: number): Promise<Transaction[]> {
  const txns = (transactionsData as Transaction[])
    .filter((t) => t.userId === userId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return delay(txns);
}

export function getAccounts(userId: number): Promise<Account[]> {
  return delay((accountsData as Account[]).filter((a) => a.userId === userId));
}

export function getCards(userId: number): Promise<Card[]> {
  return delay((cardsData as Card[]).filter((c) => c.userId === userId));
}

export function getNotifications(userId: number): Promise<Notification[]> {
  return delay(
    (notificationsData as Notification[])
      .filter((n) => n.userId === userId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );
}
