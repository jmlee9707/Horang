package com.dool.characterservice.api.service;

import com.dool.characterservice.db.domain.CharacterMission;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CharacterMissionServiceImpl implements CharacterMissionService {
    @Override
    public CharacterMission getMission(Long id) {
        return null;
    }
}