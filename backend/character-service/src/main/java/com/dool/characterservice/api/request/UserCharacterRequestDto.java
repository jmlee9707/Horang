package com.dool.characterservice.api.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCharacterRequestDto {
    private String user_id;
    private Long character_id;
    private String nickname;
}
