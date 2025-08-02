# `zeroTrustDeviceDefaultProfileLocalDomainFallback` Submodule <a name="`zeroTrustDeviceDefaultProfileLocalDomainFallback` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallback <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback cloudflare_zero_trust_device_default_profile_local_domain_fallback}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback(
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
  domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}.

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.Initializer.parameter.domains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains">put_domains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domains` <a name="put_domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains"></a>

```python
def put_domains(
  value: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.putDomains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDeviceDefaultProfileLocalDomainFallback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfileLocalDomainFallback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domainsInput">domains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domains"></a>

```python
domains: ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.domainsInput"></a>

```python
domains_input: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallback.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#account_id ZeroTrustDeviceDefaultProfileLocalDomainFallback#account_id}.

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackConfig.property.domains"></a>

```python
domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#domains ZeroTrustDeviceDefaultProfileLocalDomainFallback#domains}.

---

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains(
  suffix: str,
  description: str = None,
  dns_server: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.suffix">suffix</a></code> | <code>str</code> | The domain suffix to match when resolving locally. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.description">description</a></code> | <code>str</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | A list of IP addresses to handle domain resolution. |

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#suffix ZeroTrustDeviceDefaultProfileLocalDomainFallback#suffix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#description ZeroTrustDeviceDefaultProfileLocalDomainFallback#description}

---

##### `dns_server`<sup>Optional</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_default_profile_local_domain_fallback#dns_server ZeroTrustDeviceDefaultProfileLocalDomainFallback#dns_server}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]]

---


### ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_default_profile_local_domain_fallback

zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer">reset_dns_server</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_server` <a name="reset_dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer"></a>

```python
def reset_dns_server() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput">dns_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_server_input`<sup>Optional</sup> <a name="dns_server_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput"></a>

```python
dns_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfileLocalDomainFallback.ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains">ZeroTrustDeviceDefaultProfileLocalDomainFallbackDomains</a>]

---



