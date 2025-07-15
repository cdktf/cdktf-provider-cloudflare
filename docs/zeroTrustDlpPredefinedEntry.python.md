# `zeroTrustDlpPredefinedEntry` Submodule <a name="`zeroTrustDlpPredefinedEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedEntry <a name="ZeroTrustDlpPredefinedEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  enabled: typing.Union[bool, IResolvable],
  entry_id: str,
  profile_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}.

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.entryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}.

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.profileId"></a>

- *Type:* str

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#profile_id ZeroTrustDlpPredefinedEntry#profile_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId">reset_profile_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpPredefinedEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpPredefinedEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence"></a>

```python
confidence: ZeroTrustDlpPredefinedEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedEntryConfidence <a name="ZeroTrustDlpPredefinedEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence()
```


### ZeroTrustDlpPredefinedEntryConfig <a name="ZeroTrustDlpPredefinedEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  enabled: typing.Union[bool, IResolvable],
  entry_id: str,
  profile_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId">profile_id</a></code> | <code>str</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}.

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}.

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_predefined_entry#profile_id ZeroTrustDlpPredefinedEntry#profile_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedEntryConfidenceOutputReference <a name="ZeroTrustDlpPredefinedEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_predefined_entry

zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable">ai_context_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_context_available`<sup>Required</sup> <a name="ai_context_available" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```python
ai_context_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available"></a>

```python
available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpPredefinedEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a>

---



