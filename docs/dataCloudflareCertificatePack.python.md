# `dataCloudflareCertificatePack` Submodule <a name="`dataCloudflareCertificatePack` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificatePack <a name="DataCloudflareCertificatePack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack cloudflare_certificate_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  certificate_pack_id: str = None,
  filter: DataCloudflareCertificatePackFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.certificatePackId">certificate_pack_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#zone_id DataCloudflareCertificatePack#zone_id}

---

##### `certificate_pack_id`<sup>Optional</sup> <a name="certificate_pack_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.certificatePackId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#certificate_pack_id DataCloudflareCertificatePack#certificate_pack_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetCertificatePackId">reset_certificate_pack_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter"></a>

```python
def put_filter(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter.parameter.status"></a>

- *Type:* str

Include Certificate Packs of all statuses, not just active ones. Available values: "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#status DataCloudflareCertificatePack#status}

---

##### `reset_certificate_pack_id` <a name="reset_certificate_pack_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetCertificatePackId"></a>

```python
def reset_certificate_pack_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePack.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareCertificatePack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareCertificatePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificatePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificateAuthority">certificate_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList">DataCloudflareCertificatePackCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cloudflareBranding">cloudflare_branding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference">DataCloudflareCertificatePackFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.primaryCertificate">primary_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationErrors">validation_errors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList">DataCloudflareCertificatePackValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationMethod">validation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationRecords">validation_records</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList">DataCloudflareCertificatePackValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validityDays">validity_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackIdInput">certificate_pack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackId">certificate_pack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificateAuthority"></a>

```python
certificate_authority: str
```

- *Type:* str

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificates"></a>

```python
certificates: DataCloudflareCertificatePackCertificatesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList">DataCloudflareCertificatePackCertificatesList</a>

---

##### `cloudflare_branding`<sup>Required</sup> <a name="cloudflare_branding" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cloudflareBranding"></a>

```python
cloudflare_branding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filter"></a>

```python
filter: DataCloudflareCertificatePackFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference">DataCloudflareCertificatePackFilterOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `primary_certificate`<sup>Required</sup> <a name="primary_certificate" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.primaryCertificate"></a>

```python
primary_certificate: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_errors`<sup>Required</sup> <a name="validation_errors" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationErrors"></a>

```python
validation_errors: DataCloudflareCertificatePackValidationErrorsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList">DataCloudflareCertificatePackValidationErrorsList</a>

---

##### `validation_method`<sup>Required</sup> <a name="validation_method" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationMethod"></a>

```python
validation_method: str
```

- *Type:* str

---

##### `validation_records`<sup>Required</sup> <a name="validation_records" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationRecords"></a>

```python
validation_records: DataCloudflareCertificatePackValidationRecordsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList">DataCloudflareCertificatePackValidationRecordsList</a>

---

##### `validity_days`<sup>Required</sup> <a name="validity_days" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validityDays"></a>

```python
validity_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_pack_id_input`<sup>Optional</sup> <a name="certificate_pack_id_input" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackIdInput"></a>

```python
certificate_pack_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareCertificatePackFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `certificate_pack_id`<sup>Required</sup> <a name="certificate_pack_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackId"></a>

```python
certificate_pack_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificatePackCertificates <a name="DataCloudflareCertificatePackCertificates" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates()
```


### DataCloudflareCertificatePackCertificatesGeoRestrictions <a name="DataCloudflareCertificatePackCertificatesGeoRestrictions" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions()
```


### DataCloudflareCertificatePackConfig <a name="DataCloudflareCertificatePackConfig" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  zone_id: str,
  certificate_pack_id: str = None,
  filter: DataCloudflareCertificatePackFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.certificatePackId">certificate_pack_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#zone_id DataCloudflareCertificatePack#zone_id}

---

##### `certificate_pack_id`<sup>Optional</sup> <a name="certificate_pack_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.certificatePackId"></a>

```python
certificate_pack_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#certificate_pack_id DataCloudflareCertificatePack#certificate_pack_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.filter"></a>

```python
filter: DataCloudflareCertificatePackFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}.

---

### DataCloudflareCertificatePackFilter <a name="DataCloudflareCertificatePackFilter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.property.status">status</a></code> | <code>str</code> | Include Certificate Packs of all statuses, not just active ones. Available values: "all". |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.property.status"></a>

```python
status: str
```

- *Type:* str

Include Certificate Packs of all statuses, not just active ones. Available values: "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#status DataCloudflareCertificatePack#status}

---

### DataCloudflareCertificatePackValidationErrors <a name="DataCloudflareCertificatePackValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors()
```


### DataCloudflareCertificatePackValidationRecords <a name="DataCloudflareCertificatePackValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference <a name="DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions">DataCloudflareCertificatePackCertificatesGeoRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCertificatePackCertificatesGeoRestrictions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions">DataCloudflareCertificatePackCertificatesGeoRestrictions</a>

---


### DataCloudflareCertificatePackCertificatesList <a name="DataCloudflareCertificatePackCertificatesList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCertificatePackCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCertificatePackCertificatesOutputReference <a name="DataCloudflareCertificatePackCertificatesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.bundleMethod">bundle_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.geoRestrictions">geo_restrictions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference">DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.uploadedOn">uploaded_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates">DataCloudflareCertificatePackCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_method`<sup>Required</sup> <a name="bundle_method" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.bundleMethod"></a>

```python
bundle_method: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `geo_restrictions`<sup>Required</sup> <a name="geo_restrictions" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.geoRestrictions"></a>

```python
geo_restrictions: DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference">DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uploaded_on`<sup>Required</sup> <a name="uploaded_on" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.uploadedOn"></a>

```python
uploaded_on: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCertificatePackCertificates
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates">DataCloudflareCertificatePackCertificates</a>

---


### DataCloudflareCertificatePackFilterOutputReference <a name="DataCloudflareCertificatePackFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareCertificatePackFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

---


### DataCloudflareCertificatePackValidationErrorsList <a name="DataCloudflareCertificatePackValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCertificatePackValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCertificatePackValidationErrorsOutputReference <a name="DataCloudflareCertificatePackValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors">DataCloudflareCertificatePackValidationErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCertificatePackValidationErrors
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors">DataCloudflareCertificatePackValidationErrors</a>

---


### DataCloudflareCertificatePackValidationRecordsList <a name="DataCloudflareCertificatePackValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareCertificatePackValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareCertificatePackValidationRecordsOutputReference <a name="DataCloudflareCertificatePackValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_certificate_pack

dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.emails">emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpBody">http_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtName">txt_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtValue">txt_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords">DataCloudflareCertificatePackValidationRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_body`<sup>Required</sup> <a name="http_body" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpBody"></a>

```python
http_body: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `txt_name`<sup>Required</sup> <a name="txt_name" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtName"></a>

```python
txt_name: str
```

- *Type:* str

---

##### `txt_value`<sup>Required</sup> <a name="txt_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtValue"></a>

```python
txt_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareCertificatePackValidationRecords
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords">DataCloudflareCertificatePackValidationRecords</a>

---



