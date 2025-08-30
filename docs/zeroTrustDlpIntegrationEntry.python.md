# `zeroTrustDlpIntegrationEntry` Submodule <a name="`zeroTrustDlpIntegrationEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpIntegrationEntry <a name="ZeroTrustDlpIntegrationEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry(
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}.

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.entryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}.

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.profileId"></a>

- *Type:* str

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#profile_id ZeroTrustDlpIntegrationEntry#profile_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetProfileId">reset_profile_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpIntegrationEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpIntegrationEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpIntegrationEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.caseSensitive">case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference">ZeroTrustDlpIntegrationEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference">ZeroTrustDlpIntegrationEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.variant">variant</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference">ZeroTrustDlpIntegrationEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.wordList">word_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.caseSensitive"></a>

```python
case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.confidence"></a>

```python
confidence: ZeroTrustDlpIntegrationEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference">ZeroTrustDlpIntegrationEntryConfidenceOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.pattern"></a>

```python
pattern: ZeroTrustDlpIntegrationEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference">ZeroTrustDlpIntegrationEntryPatternOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.secret"></a>

```python
secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `variant`<sup>Required</sup> <a name="variant" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.variant"></a>

```python
variant: ZeroTrustDlpIntegrationEntryVariantOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference">ZeroTrustDlpIntegrationEntryVariantOutputReference</a>

---

##### `word_list`<sup>Required</sup> <a name="word_list" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.wordList"></a>

```python
word_list: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpIntegrationEntryConfidence <a name="ZeroTrustDlpIntegrationEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidence.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidence()
```


### ZeroTrustDlpIntegrationEntryConfig <a name="ZeroTrustDlpIntegrationEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig(
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.profileId">profile_id</a></code> | <code>str</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}.

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}.

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_integration_entry#profile_id ZeroTrustDlpIntegrationEntry#profile_id}

---

### ZeroTrustDlpIntegrationEntryPattern <a name="ZeroTrustDlpIntegrationEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPattern()
```


### ZeroTrustDlpIntegrationEntryVariant <a name="ZeroTrustDlpIntegrationEntryVariant" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariant.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariant()
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpIntegrationEntryConfidenceOutputReference <a name="ZeroTrustDlpIntegrationEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable">ai_context_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidence">ZeroTrustDlpIntegrationEntryConfidence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_context_available`<sup>Required</sup> <a name="ai_context_available" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```python
ai_context_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.available"></a>

```python
available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidenceOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpIntegrationEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfidence">ZeroTrustDlpIntegrationEntryConfidence</a>

---


### ZeroTrustDlpIntegrationEntryPatternOutputReference <a name="ZeroTrustDlpIntegrationEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation">validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPattern">ZeroTrustDlpIntegrationEntryPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.validation"></a>

```python
validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPatternOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpIntegrationEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryPattern">ZeroTrustDlpIntegrationEntryPattern</a>

---


### ZeroTrustDlpIntegrationEntryVariantOutputReference <a name="ZeroTrustDlpIntegrationEntryVariantOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_integration_entry

zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType">topic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariant">ZeroTrustDlpIntegrationEntryVariant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `topic_type`<sup>Required</sup> <a name="topic_type" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.topicType"></a>

```python
topic_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariantOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpIntegrationEntryVariant
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryVariant">ZeroTrustDlpIntegrationEntryVariant</a>

---



