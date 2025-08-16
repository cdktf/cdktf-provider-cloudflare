# `zeroTrustDeviceCustomProfileLocalDomainFallback` Submodule <a name="`zeroTrustDeviceCustomProfileLocalDomainFallback` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallback <a name="ZeroTrustDeviceCustomProfileLocalDomainFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback(
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
  domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]],
  policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}.

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.domains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains">put_domains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_domains` <a name="put_domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains"></a>

```python
def put_domains(
  value: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustDeviceCustomProfileLocalDomainFallback to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceCustomProfileLocalDomainFallback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domains">domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domainsInput">domains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domains"></a>

```python
domains: ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domainsInput"></a>

```python
domains_input: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]],
  policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.domains">domains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}.

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.domains"></a>

```python
domains: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}.

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}.

---

### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains(
  suffix: str,
  description: str = None,
  dns_server: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.suffix">suffix</a></code> | <code>str</code> | The domain suffix to match when resolving locally. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.description">description</a></code> | <code>str</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | A list of IP addresses to handle domain resolution. |

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#suffix ZeroTrustDeviceCustomProfileLocalDomainFallback#suffix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#description ZeroTrustDeviceCustomProfileLocalDomainFallback#description}

---

##### `dns_server`<sup>Optional</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#dns_server ZeroTrustDeviceCustomProfileLocalDomainFallback#dns_server}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]]

---


### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import zero_trust_device_custom_profile_local_domain_fallback

zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer">reset_dns_server</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_server` <a name="reset_dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer"></a>

```python
def reset_dns_server() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput">dns_server_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer">dns_server</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_server_input`<sup>Optional</sup> <a name="dns_server_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput"></a>

```python
dns_server_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_server`<sup>Required</sup> <a name="dns_server" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer"></a>

```python
dns_server: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains</a>]

---



