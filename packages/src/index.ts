// Tipos base de NotAudible

export interface Track {
  id: string;
  sourceId: string;
  title: string;
  artists: string[];
  album: string;
  albumArtist?: string;
  year?: number;
  genre?: string[];
  trackNumber?: number;
  discNumber?: number;
  duration: number; // en segundos
  cover?: string; // ruta o data URL
  file: {
    path: string;
    filename: string;
    format: string;
    codec?: string;
    bitrate?: number;
    sampleRate?: number;
    bitDepth?: number;
    channels?: number;
    size?: number;
  };
  lyrics?: Lyrics;
  stats?: ListeningStats;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year?: number;
  cover?: string;
  trackIds: string[];
}

export interface Artist {
  id: string;
  name: string;
  albumIds: string[];
  trackIds: string[];
}

export interface Playlist {
  id: string;
  name: string;
  trackIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface HistoryEntry {
  trackId: string;
  playedAt: string;
  durationListened: number;
  completed: boolean;
}

export interface ListeningStats {
  plays: number;
  minutesListened: number;
  lastPlayed?: string;
  completedPlays: number;
  skips: number;
}

export interface Lyrics {
  type: 'plain' | 'lrc';
  content: string;
}