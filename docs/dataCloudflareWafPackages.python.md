# `dataCloudflareWafPackages` Submodule <a name="`dataCloudflareWafPackages` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWafPackages <a name="DataCloudflareWafPackages" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages cloudflare_waf_packages}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  filter: DataCloudflareWafPackagesFilter = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#id DataCloudflareWafPackages#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#zone_id DataCloudflareWafPackages#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#filter DataCloudflareWafPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#id DataCloudflareWafPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter"></a>

```python
def put_filter(
  action_mode: str = None,
  detection_mode: str = None,
  name: str = None,
  sensitivity: str = None
) -> None
```

###### `action_mode`<sup>Optional</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter.parameter.actionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#action_mode DataCloudflareWafPackages#action_mode}.

---

###### `detection_mode`<sup>Optional</sup> <a name="detection_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter.parameter.detectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#detection_mode DataCloudflareWafPackages#detection_mode}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#name DataCloudflareWafPackages#name}.

---

###### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.putFilter.parameter.sensitivity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#sensitivity DataCloudflareWafPackages#sensitivity}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference">DataCloudflareWafPackagesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.packages">packages</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList">DataCloudflareWafPackagesPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.filter"></a>

```python
filter: DataCloudflareWafPackagesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference">DataCloudflareWafPackagesFilterOutputReference</a>

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.packages"></a>

```python
packages: DataCloudflareWafPackagesPackagesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList">DataCloudflareWafPackagesPackagesList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.filterInput"></a>

```python
filter_input: DataCloudflareWafPackagesFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWafPackagesConfig <a name="DataCloudflareWafPackagesConfig" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  filter: DataCloudflareWafPackagesFilter = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#id DataCloudflareWafPackages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#zone_id DataCloudflareWafPackages#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.filter"></a>

```python
filter: DataCloudflareWafPackagesFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#filter DataCloudflareWafPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#id DataCloudflareWafPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataCloudflareWafPackagesFilter <a name="DataCloudflareWafPackagesFilter" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesFilter(
  action_mode: str = None,
  detection_mode: str = None,
  name: str = None,
  sensitivity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.actionMode">action_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#action_mode DataCloudflareWafPackages#action_mode}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.detectionMode">detection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#detection_mode DataCloudflareWafPackages#detection_mode}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#name DataCloudflareWafPackages#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.sensitivity">sensitivity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#sensitivity DataCloudflareWafPackages#sensitivity}. |

---

##### `action_mode`<sup>Optional</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.actionMode"></a>

```python
action_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#action_mode DataCloudflareWafPackages#action_mode}.

---

##### `detection_mode`<sup>Optional</sup> <a name="detection_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.detectionMode"></a>

```python
detection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#detection_mode DataCloudflareWafPackages#detection_mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#name DataCloudflareWafPackages#name}.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter.property.sensitivity"></a>

```python
sensitivity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#sensitivity DataCloudflareWafPackages#sensitivity}.

---

### DataCloudflareWafPackagesPackages <a name="DataCloudflareWafPackagesPackages" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackages.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesPackages()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWafPackagesFilterOutputReference <a name="DataCloudflareWafPackagesFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetActionMode">reset_action_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetDetectionMode">reset_detection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetSensitivity">reset_sensitivity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_mode` <a name="reset_action_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetActionMode"></a>

```python
def reset_action_mode() -> None
```

##### `reset_detection_mode` <a name="reset_detection_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetDetectionMode"></a>

```python
def reset_detection_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sensitivity` <a name="reset_sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.resetSensitivity"></a>

```python
def reset_sensitivity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.actionModeInput">action_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.detectionModeInput">detection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.sensitivityInput">sensitivity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.actionMode">action_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.detectionMode">detection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.sensitivity">sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_mode_input`<sup>Optional</sup> <a name="action_mode_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.actionModeInput"></a>

```python
action_mode_input: str
```

- *Type:* str

---

##### `detection_mode_input`<sup>Optional</sup> <a name="detection_mode_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.detectionModeInput"></a>

```python
detection_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sensitivity_input`<sup>Optional</sup> <a name="sensitivity_input" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.sensitivityInput"></a>

```python
sensitivity_input: str
```

- *Type:* str

---

##### `action_mode`<sup>Required</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.actionMode"></a>

```python
action_mode: str
```

- *Type:* str

---

##### `detection_mode`<sup>Required</sup> <a name="detection_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.detectionMode"></a>

```python
detection_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.sensitivity"></a>

```python
sensitivity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWafPackagesFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesFilter">DataCloudflareWafPackagesFilter</a>

---


### DataCloudflareWafPackagesPackagesList <a name="DataCloudflareWafPackagesPackagesList" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWafPackagesPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWafPackagesPackagesOutputReference <a name="DataCloudflareWafPackagesPackagesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waf_packages

dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.actionMode">action_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.detectionMode">detection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.sensitivity">sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackages">DataCloudflareWafPackagesPackages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_mode`<sup>Required</sup> <a name="action_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.actionMode"></a>

```python
action_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detection_mode`<sup>Required</sup> <a name="detection_mode" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.detectionMode"></a>

```python
detection_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.sensitivity"></a>

```python
sensitivity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackagesOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWafPackagesPackages
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWafPackages.DataCloudflareWafPackagesPackages">DataCloudflareWafPackagesPackages</a>

---



