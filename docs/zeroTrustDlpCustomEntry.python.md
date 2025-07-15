# `zeroTrustDlpCustomEntry` Submodule <a name="`zeroTrustDlpCustomEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpCustomEntry <a name="ZeroTrustDlpCustomEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry cloudflare_zero_trust_dlp_custom_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry(
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
  name: str,
  pattern: ZeroTrustDlpCustomEntryPattern,
  profile_id: str,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.type">type</a></code> | <code>str</code> | Available values: "custom", "predefined", "integration". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.pattern"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.profileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.Initializer.parameter.type"></a>

- *Type:* str

Available values: "custom", "predefined", "integration".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#type ZeroTrustDlpCustomEntry#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern">put_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pattern` <a name="put_pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern"></a>

```python
def put_pattern(
  regex: str,
  validation: str = None
) -> None
```

###### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}.

---

###### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.putPattern.parameter.validation"></a>

- *Type:* str

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#validation ZeroTrustDlpCustomEntry#validation}

---

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDlpCustomEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDlpCustomEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDlpCustomEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpCustomEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive">case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret">secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList">word_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput">pattern_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.caseSensitive"></a>

```python
case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.confidence"></a>

```python
confidence: ZeroTrustDlpCustomEntryConfidenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference">ZeroTrustDlpCustomEntryConfidenceOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.pattern"></a>

```python
pattern: ZeroTrustDlpCustomEntryPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference">ZeroTrustDlpCustomEntryPatternOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.secret"></a>

```python
secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `word_list`<sup>Required</sup> <a name="word_list" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.wordList"></a>

```python
word_list: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.patternInput"></a>

```python
pattern_input: typing.Union[IResolvable, ZeroTrustDlpCustomEntryPattern]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>]

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpCustomEntryConfidence <a name="ZeroTrustDlpCustomEntryConfidence" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence()
```


### ZeroTrustDlpCustomEntryConfig <a name="ZeroTrustDlpCustomEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  pattern: ZeroTrustDlpCustomEntryPattern,
  profile_id: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId">profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.type">type</a></code> | <code>str</code> | Available values: "custom", "predefined", "integration". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#account_id ZeroTrustDlpCustomEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#enabled ZeroTrustDlpCustomEntry#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#name ZeroTrustDlpCustomEntry#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.pattern"></a>

```python
pattern: ZeroTrustDlpCustomEntryPattern
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#pattern ZeroTrustDlpCustomEntry#pattern}.

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#profile_id ZeroTrustDlpCustomEntry#profile_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "custom", "predefined", "integration".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#type ZeroTrustDlpCustomEntry#type}

---

### ZeroTrustDlpCustomEntryPattern <a name="ZeroTrustDlpCustomEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern(
  regex: str,
  validation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation">validation</a></code> | <code>str</code> | Available values: "luhn". |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#regex ZeroTrustDlpCustomEntry#regex}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern.property.validation"></a>

```python
validation: str
```

- *Type:* str

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_dlp_custom_entry#validation ZeroTrustDlpCustomEntry#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpCustomEntryConfidenceOutputReference <a name="ZeroTrustDlpCustomEntryConfidenceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable">ai_context_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available">available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_context_available`<sup>Required</sup> <a name="ai_context_available" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```python
ai_context_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.available"></a>

```python
available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidenceOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustDlpCustomEntryConfidence
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryConfidence">ZeroTrustDlpCustomEntryConfidence</a>

---


### ZeroTrustDlpCustomEntryPatternOutputReference <a name="ZeroTrustDlpCustomEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_dlp_custom_entry

zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation">reset_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_validation` <a name="reset_validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.resetValidation"></a>

```python
def reset_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput">validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation">validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validationInput"></a>

```python
validation_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.validation"></a>

```python
validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPatternOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustDlpCustomEntryPattern]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomEntry.ZeroTrustDlpCustomEntryPattern">ZeroTrustDlpCustomEntryPattern</a>]

---



