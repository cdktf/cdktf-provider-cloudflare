# `zeroTrustDlpPredefinedProfile` Submodule <a name="`zeroTrustDlpPredefinedProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedProfile <a name="ZeroTrustDlpPredefinedProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  profile_id: str,
  ai_context_enabled: bool | IResolvable = None,
  allowed_match_count: typing.Union[int, float] = None,
  confidence_threshold: str = None,
  enabled_entries: typing.List[str] = None,
  entries: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries] = None,
  ocr_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.aiContextEnabled">ai_context_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.enabledEntries">enabled_entries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.entries">entries</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.ocrEnabled">ocr_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}.

---

##### `ai_context_enabled`<sup>Optional</sup> <a name="ai_context_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.aiContextEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}.

---

##### `allowed_match_count`<sup>Optional</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}.

---

##### `confidence_threshold`<sup>Optional</sup> <a name="confidence_threshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.confidenceThreshold"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}.

---

##### `enabled_entries`<sup>Optional</sup> <a name="enabled_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.enabledEntries"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}.

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.entries"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries">put_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled">reset_ai_context_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount">reset_allowed_match_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold">reset_confidence_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries">reset_enabled_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries">reset_entries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled">reset_ocr_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entries` <a name="put_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries"></a>

```python
def put_entries(
  value: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]

---

##### `reset_ai_context_enabled` <a name="reset_ai_context_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled"></a>

```python
def reset_ai_context_enabled() -> None
```

##### `reset_allowed_match_count` <a name="reset_allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount"></a>

```python
def reset_allowed_match_count() -> None
```

##### `reset_confidence_threshold` <a name="reset_confidence_threshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold"></a>

```python
def reset_confidence_threshold() -> None
```

##### `reset_enabled_entries` <a name="reset_enabled_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries"></a>

```python
def reset_enabled_entries() -> None
```

##### `reset_entries` <a name="reset_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries"></a>

```python
def reset_entries() -> None
```

##### `reset_ocr_enabled` <a name="reset_ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled"></a>

```python
def reset_ocr_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess">open_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput">ai_context_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput">allowed_match_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput">confidence_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput">enabled_entries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput">entries_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput">ocr_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled">ai_context_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries">enabled_entries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled">ocr_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries"></a>

```python
entries: ZeroTrustDlpPredefinedProfileEntriesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_access`<sup>Required</sup> <a name="open_access" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```python
open_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `ai_context_enabled_input`<sup>Optional</sup> <a name="ai_context_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput"></a>

```python
ai_context_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allowed_match_count_input`<sup>Optional</sup> <a name="allowed_match_count_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput"></a>

```python
allowed_match_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidence_threshold_input`<sup>Optional</sup> <a name="confidence_threshold_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput"></a>

```python
confidence_threshold_input: str
```

- *Type:* str

---

##### `enabled_entries_input`<sup>Optional</sup> <a name="enabled_entries_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput"></a>

```python
enabled_entries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput"></a>

```python
entries_input: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]

---

##### `ocr_enabled_input`<sup>Optional</sup> <a name="ocr_enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput"></a>

```python
ocr_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `ai_context_enabled`<sup>Required</sup> <a name="ai_context_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled"></a>

```python
ai_context_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allowed_match_count`<sup>Required</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidence_threshold`<sup>Required</sup> <a name="confidence_threshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

---

##### `enabled_entries`<sup>Required</sup> <a name="enabled_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries"></a>

```python
enabled_entries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocr_enabled`<sup>Required</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```python
ocr_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedProfileConfig <a name="ZeroTrustDlpPredefinedProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  profile_id: str,
  ai_context_enabled: bool | IResolvable = None,
  allowed_match_count: typing.Union[int, float] = None,
  confidence_threshold: str = None,
  enabled_entries: typing.List[str] = None,
  entries: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries] = None,
  ocr_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled">ai_context_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount">allowed_match_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold">confidence_threshold</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries">enabled_entries</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries">entries</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled">ocr_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}.

---

##### `ai_context_enabled`<sup>Optional</sup> <a name="ai_context_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled"></a>

```python
ai_context_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}.

---

##### `allowed_match_count`<sup>Optional</sup> <a name="allowed_match_count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount"></a>

```python
allowed_match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}.

---

##### `confidence_threshold`<sup>Optional</sup> <a name="confidence_threshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold"></a>

```python
confidence_threshold: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}.

---

##### `enabled_entries`<sup>Optional</sup> <a name="enabled_entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries"></a>

```python
enabled_entries: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}.

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries"></a>

```python
entries: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}.

---

##### `ocr_enabled`<sup>Optional</sup> <a name="ocr_enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled"></a>

```python
ocr_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}.

---

### ZeroTrustDlpPredefinedProfileEntries <a name="ZeroTrustDlpPredefinedProfileEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries(
  enabled: bool | IResolvable,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedProfileEntriesList <a name="ZeroTrustDlpPredefinedProfileEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustDlpPredefinedProfileEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustDlpPredefinedProfileEntries]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>]

---


### ZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="ZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_profile

zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustDlpPredefinedProfileEntries
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>

---



