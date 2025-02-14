# `dataCloudflareDnsRecord` Submodule <a name="`dataCloudflareDnsRecord` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsRecord <a name="DataCloudflareDnsRecord" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecord(scope Construct, id *string, config DataCloudflareDnsRecordConfig) DataCloudflareDnsRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig">DataCloudflareDnsRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig">DataCloudflareDnsRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetDnsRecordId">ResetDnsRecordId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter"></a>

```go
func PutFilter(value DataCloudflareDnsRecordFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>

---

##### `ResetDnsRecordId` <a name="ResetDnsRecordId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetDnsRecordId"></a>

```go
func ResetDnsRecordId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.resetFilter"></a>

```go
func ResetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.DataCloudflareDnsRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.DataCloudflareDnsRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.DataCloudflareDnsRecord_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.DataCloudflareDnsRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareDnsRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareDnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.commentModifiedOn">CommentModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference">DataCloudflareDnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference">DataCloudflareDnsRecordFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.meta">Meta</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxiable">Proxiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxied">Proxied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference">DataCloudflareDnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tagsModifiedOn">TagsModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordIdInput">DnsRecordIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordId">DnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CommentModifiedOn`<sup>Required</sup> <a name="CommentModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.commentModifiedOn"></a>

```go
func CommentModifiedOn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.data"></a>

```go
func Data() DataCloudflareDnsRecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference">DataCloudflareDnsRecordDataOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filter"></a>

```go
func Filter() DataCloudflareDnsRecordFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference">DataCloudflareDnsRecordFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.meta"></a>

```go
func Meta() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxiable"></a>

```go
func Proxiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.proxied"></a>

```go
func Proxied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.settings"></a>

```go
func Settings() DataCloudflareDnsRecordSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference">DataCloudflareDnsRecordSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TagsModifiedOn`<sup>Required</sup> <a name="TagsModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tagsModifiedOn"></a>

```go
func TagsModifiedOn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DnsRecordIdInput`<sup>Optional</sup> <a name="DnsRecordIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordIdInput"></a>

```go
func DnsRecordIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `DnsRecordId`<sup>Required</sup> <a name="DnsRecordId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.dnsRecordId"></a>

```go
func DnsRecordId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsRecordConfig <a name="DataCloudflareDnsRecordConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	DnsRecordId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dnsRecordId">DnsRecordId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#zone_id DataCloudflareDnsRecord#zone_id}

---

##### `DnsRecordId`<sup>Optional</sup> <a name="DnsRecordId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.dnsRecordId"></a>

```go
DnsRecordId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#dns_record_id DataCloudflareDnsRecord#dns_record_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordConfig.property.filter"></a>

```go
Filter DataCloudflareDnsRecordFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter">DataCloudflareDnsRecordFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}.

---

### DataCloudflareDnsRecordData <a name="DataCloudflareDnsRecordData" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordData {

}
```


### DataCloudflareDnsRecordFilter <a name="DataCloudflareDnsRecordFilter" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordFilter {
	Comment: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment,
	Content: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent,
	Direction: *string,
	Match: *string,
	Name: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName,
	Order: *string,
	Proxied: interface{},
	Search: *string,
	Tag: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag,
	TagMatch: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.content">Content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.direction">Direction</a></code> | <code>*string</code> | Direction to order DNS records in. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.match">Match</a></code> | <code>*string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.order">Order</a></code> | <code>*string</code> | Field to order DNS records by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.proxied">Proxied</a></code> | <code>interface{}</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.search">Search</a></code> | <code>*string</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tagMatch">TagMatch</a></code> | <code>*string</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.type">Type</a></code> | <code>*string</code> | Record type. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.comment"></a>

```go
Comment DataCloudflareDnsRecordFilterComment
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.content"></a>

```go
Content DataCloudflareDnsRecordFilterContent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order DNS records in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#direction DataCloudflareDnsRecord#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.match"></a>

```go
Match *string
```

- *Type:* *string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#match DataCloudflareDnsRecord#match}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.name"></a>

```go
Name DataCloudflareDnsRecordFilterName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order DNS records by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#order DataCloudflareDnsRecord#order}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.proxied"></a>

```go
Proxied interface{}
```

- *Type:* interface{}

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#proxied DataCloudflareDnsRecord#proxied}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#search DataCloudflareDnsRecord#search}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tag"></a>

```go
Tag DataCloudflareDnsRecordFilterTag
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}.

---

##### `TagMatch`<sup>Optional</sup> <a name="TagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.tagMatch"></a>

```go
TagMatch *string
```

- *Type:* *string

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#tag_match DataCloudflareDnsRecord#tag_match}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Record type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#type DataCloudflareDnsRecord#type}

---

### DataCloudflareDnsRecordFilterComment <a name="DataCloudflareDnsRecordFilterComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordFilterComment {
	Absent: *string,
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Present: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.absent">Absent</a></code> | <code>*string</code> | If this parameter is present, only records *without* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.present">Present</a></code> | <code>*string</code> | If this parameter is present, only records *with* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record comment. Comment filters are case-insensitive. |

---

##### `Absent`<sup>Optional</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.absent"></a>

```go
Absent *string
```

- *Type:* *string

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.present"></a>

```go
Present *string
```

- *Type:* *string

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterContent <a name="DataCloudflareDnsRecordFilterContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordFilterContent {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record content. Content filters are case-insensitive. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterName <a name="DataCloudflareDnsRecordFilterName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordFilterName {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record name. Name filters are case-insensitive. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordFilterTag <a name="DataCloudflareDnsRecordFilterTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordFilterTag {
	Absent: *string,
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Present: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.absent">Absent</a></code> | <code>*string</code> | Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.contains">Contains</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.endswith">Endswith</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.exact">Exact</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.present">Present</a></code> | <code>*string</code> | Name of a tag which must be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.startswith">Startswith</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |

---

##### `Absent`<sup>Optional</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.absent"></a>

```go
Absent *string
```

- *Type:* *string

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.present"></a>

```go
Present *string
```

- *Type:* *string

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}

---

### DataCloudflareDnsRecordSettings <a name="DataCloudflareDnsRecordSettings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

&datacloudflarednsrecord.DataCloudflareDnsRecordSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsRecordDataOutputReference <a name="DataCloudflareDnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.algorithm">Algorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.altitude">Altitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digestType">DigestType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.flags">Flags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDirection">LatDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDirection">LongDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.matchingType">MatchingType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.preference">Preference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.replacement">Replacement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.selector">Selector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.usage">Usage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData">DataCloudflareDnsRecordData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.algorithm"></a>

```go
func Algorithm() *f64
```

- *Type:* *f64

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.altitude"></a>

```go
func Altitude() *f64
```

- *Type:* *f64

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.digestType"></a>

```go
func DigestType() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.flags"></a>

```go
func Flags() AnyMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDegrees"></a>

```go
func LatDegrees() *f64
```

- *Type:* *f64

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latDirection"></a>

```go
func LatDirection() *string
```

- *Type:* *string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latMinutes"></a>

```go
func LatMinutes() *f64
```

- *Type:* *f64

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.latSeconds"></a>

```go
func LatSeconds() *f64
```

- *Type:* *f64

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDegrees"></a>

```go
func LongDegrees() *f64
```

- *Type:* *f64

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longDirection"></a>

```go
func LongDirection() *string
```

- *Type:* *string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longMinutes"></a>

```go
func LongMinutes() *f64
```

- *Type:* *f64

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.longSeconds"></a>

```go
func LongSeconds() *f64
```

- *Type:* *f64

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.matchingType"></a>

```go
func MatchingType() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionHorz"></a>

```go
func PrecisionHorz() *f64
```

- *Type:* *f64

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.precisionVert"></a>

```go
func PrecisionVert() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.preference"></a>

```go
func Preference() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.replacement"></a>

```go
func Replacement() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.selector"></a>

```go
func Selector() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.usage"></a>

```go
func Usage() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsRecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordData">DataCloudflareDnsRecordData</a>

---


### DataCloudflareDnsRecordFilterCommentOutputReference <a name="DataCloudflareDnsRecordFilterCommentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordFilterCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordFilterCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetAbsent">ResetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsent` <a name="ResetAbsent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetAbsent"></a>

```go
func ResetAbsent()
```

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absentInput">AbsentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.presentInput">PresentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absent">Absent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.present">Present</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsentInput`<sup>Optional</sup> <a name="AbsentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absentInput"></a>

```go
func AbsentInput() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.presentInput"></a>

```go
func PresentInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Absent`<sup>Required</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.absent"></a>

```go
func Absent() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.present"></a>

```go
func Present() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordFilterContentOutputReference <a name="DataCloudflareDnsRecordFilterContentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordFilterContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordFilterContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordFilterNameOutputReference <a name="DataCloudflareDnsRecordFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordFilterNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordFilterNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordFilterOutputReference <a name="DataCloudflareDnsRecordFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment">PutComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTagMatch">ResetTagMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComment` <a name="PutComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment"></a>

```go
func PutComment(value DataCloudflareDnsRecordFilterComment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterComment">DataCloudflareDnsRecordFilterComment</a>

---

##### `PutContent` <a name="PutContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent"></a>

```go
func PutContent(value DataCloudflareDnsRecordFilterContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContent">DataCloudflareDnsRecordFilterContent</a>

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName"></a>

```go
func PutName(value DataCloudflareDnsRecordFilterName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterName">DataCloudflareDnsRecordFilterName</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag"></a>

```go
func PutTag(value DataCloudflareDnsRecordFilterTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTag">DataCloudflareDnsRecordFilterTag</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetProxied"></a>

```go
func ResetProxied()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTagMatch` <a name="ResetTagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetTagMatch"></a>

```go
func ResetTagMatch()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference">DataCloudflareDnsRecordFilterCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.content">Content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference">DataCloudflareDnsRecordFilterContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference">DataCloudflareDnsRecordFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference">DataCloudflareDnsRecordFilterTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.commentInput">CommentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxiedInput">ProxiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatchInput">TagMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxied">Proxied</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatch">TagMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.comment"></a>

```go
func Comment() DataCloudflareDnsRecordFilterCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterCommentOutputReference">DataCloudflareDnsRecordFilterCommentOutputReference</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.content"></a>

```go
func Content() DataCloudflareDnsRecordFilterContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterContentOutputReference">DataCloudflareDnsRecordFilterContentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.name"></a>

```go
func Name() DataCloudflareDnsRecordFilterNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterNameOutputReference">DataCloudflareDnsRecordFilterNameOutputReference</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tag"></a>

```go
func Tag() DataCloudflareDnsRecordFilterTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference">DataCloudflareDnsRecordFilterTagOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.commentInput"></a>

```go
func CommentInput() interface{}
```

- *Type:* interface{}

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxiedInput"></a>

```go
func ProxiedInput() interface{}
```

- *Type:* interface{}

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `TagMatchInput`<sup>Optional</sup> <a name="TagMatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatchInput"></a>

```go
func TagMatchInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.proxied"></a>

```go
func Proxied() interface{}
```

- *Type:* interface{}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `TagMatch`<sup>Required</sup> <a name="TagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.tagMatch"></a>

```go
func TagMatch() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordFilterTagOutputReference <a name="DataCloudflareDnsRecordFilterTagOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordFilterTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordFilterTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetAbsent">ResetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsent` <a name="ResetAbsent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetAbsent"></a>

```go
func ResetAbsent()
```

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absentInput">AbsentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.presentInput">PresentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absent">Absent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.present">Present</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsentInput`<sup>Optional</sup> <a name="AbsentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absentInput"></a>

```go
func AbsentInput() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.presentInput"></a>

```go
func PresentInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Absent`<sup>Required</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.absent"></a>

```go
func Absent() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.present"></a>

```go
func Present() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordFilterTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordSettingsOutputReference <a name="DataCloudflareDnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarednsrecord"

datacloudflarednsrecord.NewDataCloudflareDnsRecordSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.flattenCname">FlattenCname</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv4Only">Ipv4Only</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv6Only">Ipv6Only</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings">DataCloudflareDnsRecordSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlattenCname`<sup>Required</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.flattenCname"></a>

```go
func FlattenCname() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv4Only`<sup>Required</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv4Only"></a>

```go
func Ipv4Only() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv6Only`<sup>Required</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.ipv6Only"></a>

```go
func Ipv6Only() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsRecordSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecord.DataCloudflareDnsRecordSettings">DataCloudflareDnsRecordSettings</a>

---



