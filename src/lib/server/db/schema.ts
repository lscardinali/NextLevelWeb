import { pgTable, text, integer, timestamp, serial } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	googleId: text('google_id').notNull().unique(),
	steamId: text('steam_id'),
	passwordHash: text('password_hash')
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const viewedGames = pgTable('viewed_games', {
	id: serial().primaryKey(),
	gameName: text('game_name').notNull(),
	gameId: text('game_id').notNull(),
	platform: text('platform').notNull()
});

export const ownedGames = pgTable('owned_games', {
	id: serial().primaryKey(),
	gameId: text('game_id').notNull(),
	platform: text('platform').notNull(),
	ownerId: text('owner_id')
		.notNull()
		.references(() => user.id)
});

export const favoriteGames = pgTable('favorite_games', {
	id: serial().primaryKey(),
	gameId: text('game_id').notNull(),
	platform: text('platform').notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id)
});

export type ViewedGame = typeof viewedGames.$inferSelect;

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

export type OwnedGame = typeof ownedGames.$inferSelect;

export type FavoriteGame = typeof favoriteGames.$inferSelect;
