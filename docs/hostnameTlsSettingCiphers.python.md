# `cloudflare_hostname_tls_setting_ciphers`

Refer to the Terraform Registory for docs: [`cloudflare_hostname_tls_setting_ciphers`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers).

# `hostnameTlsSettingCiphers` Submodule <a name="`hostnameTlsSettingCiphers` Submodule" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostnameTlsSettingCiphers <a name="HostnameTlsSettingCiphers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers cloudflare_hostname_tls_setting_ciphers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hostname_tls_setting_ciphers

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  value: typing.List[str],
  zone_id: str,
  id: str = None,
  ports: typing.List[typing.Union[int, float]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.value">value</a></code> | <code>typing.List[str]</code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Ports to use within the IP rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.hostname"></a>

- *Type:* str

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.value"></a>

- *Type:* typing.List[str]

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts"></a>

```python
def reset_ports() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import hostname_tls_setting_ciphers

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import hostname_tls_setting_ciphers

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import hostname_tls_setting_ciphers

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HostnameTlsSettingCiphersConfig <a name="HostnameTlsSettingCiphersConfig" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import hostname_tls_setting_ciphers

hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  value: typing.List[str],
  zone_id: str,
  id: str = None,
  ports: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname">hostname</a></code> | <code>str</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value">value</a></code> | <code>typing.List[str]</code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Ports to use within the IP rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---


