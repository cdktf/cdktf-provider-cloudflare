# `zeroTrustAccessMtlsHostnameSettings` Submodule <a name="`zeroTrustAccessMtlsHostnameSettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessMtlsHostnameSettings <a name="ZeroTrustAccessMtlsHostnameSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  settings: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]],
  account_id: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.settings">settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.settings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.accountId"></a>

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#account_id ZeroTrustAccessMtlsHostnameSettings#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.zoneId"></a>

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#zone_id ZeroTrustAccessMtlsHostnameSettings#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings"></a>

```python
def put_settings(
  value: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustAccessMtlsHostnameSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustAccessMtlsHostnameSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessMtlsHostnameSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.chinaNetwork">china_network</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.clientCertificateForwarding">client_certificate_forwarding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList">ZeroTrustAccessMtlsHostnameSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `china_network`<sup>Required</sup> <a name="china_network" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.chinaNetwork"></a>

```python
china_network: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_forwarding`<sup>Required</sup> <a name="client_certificate_forwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.clientCertificateForwarding"></a>

```python
client_certificate_forwarding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settings"></a>

```python
settings: ZeroTrustAccessMtlsHostnameSettingsSettingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList">ZeroTrustAccessMtlsHostnameSettingsSettingsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessMtlsHostnameSettingsConfig <a name="ZeroTrustAccessMtlsHostnameSettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  settings: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]],
  account_id: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.settings">settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId">account_id</a></code> | <code>str</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.settings"></a>

```python
settings: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#account_id ZeroTrustAccessMtlsHostnameSettings#account_id}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#zone_id ZeroTrustAccessMtlsHostnameSettings#zone_id}

---

### ZeroTrustAccessMtlsHostnameSettingsSettings <a name="ZeroTrustAccessMtlsHostnameSettingsSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings(
  china_network: typing.Union[bool, IResolvable],
  client_certificate_forwarding: typing.Union[bool, IResolvable],
  hostname: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.chinaNetwork">china_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Request client certificates for this hostname in China. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.clientCertificateForwarding">client_certificate_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.hostname">hostname</a></code> | <code>str</code> | The hostname that these settings apply to. |

---

##### `china_network`<sup>Required</sup> <a name="china_network" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.chinaNetwork"></a>

```python
china_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Request client certificates for this hostname in China.

Can only be set to true if this zone is china network enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#china_network ZeroTrustAccessMtlsHostnameSettings#china_network}

---

##### `client_certificate_forwarding`<sup>Required</sup> <a name="client_certificate_forwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.clientCertificateForwarding"></a>

```python
client_certificate_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#client_certificate_forwarding ZeroTrustAccessMtlsHostnameSettings#client_certificate_forwarding}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The hostname that these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_access_mtls_hostname_settings#hostname ZeroTrustAccessMtlsHostnameSettings#hostname}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessMtlsHostnameSettingsSettingsList <a name="ZeroTrustAccessMtlsHostnameSettingsSettingsList" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustAccessMtlsHostnameSettingsSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]]

---


### ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference <a name="ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_access_mtls_hostname_settings

zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput">china_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput">client_certificate_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetwork">china_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding">client_certificate_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `china_network_input`<sup>Optional</sup> <a name="china_network_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput"></a>

```python
china_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_forwarding_input`<sup>Optional</sup> <a name="client_certificate_forwarding_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput"></a>

```python
client_certificate_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `china_network`<sup>Required</sup> <a name="china_network" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetwork"></a>

```python
china_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_forwarding`<sup>Required</sup> <a name="client_certificate_forwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding"></a>

```python
client_certificate_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustAccessMtlsHostnameSettingsSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings">ZeroTrustAccessMtlsHostnameSettingsSettings</a>]

---



