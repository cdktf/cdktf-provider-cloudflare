# `dataCloudflareDnsRecords` Submodule <a name="`dataCloudflareDnsRecords` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsRecords <a name="DataCloudflareDnsRecords" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records cloudflare_dns_records}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecords(scope Construct, id *string, config DataCloudflareDnsRecordsConfig) DataCloudflareDnsRecords
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig">DataCloudflareDnsRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig">DataCloudflareDnsRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment">PutComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName">PutName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag">PutTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch">ResetTagMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutComment` <a name="PutComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment"></a>

```go
func PutComment(value DataCloudflareDnsRecordsComment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

---

##### `PutContent` <a name="PutContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent"></a>

```go
func PutContent(value DataCloudflareDnsRecordsContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

---

##### `PutName` <a name="PutName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName"></a>

```go
func PutName(value DataCloudflareDnsRecordsName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

---

##### `PutTag` <a name="PutTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag"></a>

```go
func PutTag(value DataCloudflareDnsRecordsTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetComment"></a>

```go
func ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetProxied"></a>

```go
func ResetProxied()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTagMatch` <a name="ResetTagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetTagMatch"></a>

```go
func ResetTagMatch()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.DataCloudflareDnsRecords_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.DataCloudflareDnsRecords_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.DataCloudflareDnsRecords_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.DataCloudflareDnsRecords_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareDnsRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareDnsRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content">Content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput">CommentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput">MatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput">NameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput">ProxiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput">TagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput">TagMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match">Match</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied">Proxied</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch">TagMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.comment"></a>

```go
func Comment() DataCloudflareDnsRecordsCommentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference">DataCloudflareDnsRecordsCommentOutputReference</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.content"></a>

```go
func Content() DataCloudflareDnsRecordsContentOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference">DataCloudflareDnsRecordsContentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.name"></a>

```go
func Name() DataCloudflareDnsRecordsNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference">DataCloudflareDnsRecordsNameOutputReference</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.result"></a>

```go
func Result() DataCloudflareDnsRecordsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList">DataCloudflareDnsRecordsResultList</a>

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tag"></a>

```go
func Tag() DataCloudflareDnsRecordsTagOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference">DataCloudflareDnsRecordsTagOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.commentInput"></a>

```go
func CommentInput() interface{}
```

- *Type:* interface{}

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.matchInput"></a>

```go
func MatchInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.nameInput"></a>

```go
func NameInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxiedInput"></a>

```go
func ProxiedInput() interface{}
```

- *Type:* interface{}

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagInput"></a>

```go
func TagInput() interface{}
```

- *Type:* interface{}

---

##### `TagMatchInput`<sup>Optional</sup> <a name="TagMatchInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatchInput"></a>

```go
func TagMatchInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.match"></a>

```go
func Match() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.proxied"></a>

```go
func Proxied() interface{}
```

- *Type:* interface{}

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `TagMatch`<sup>Required</sup> <a name="TagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tagMatch"></a>

```go
func TagMatch() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecords.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsRecordsComment <a name="DataCloudflareDnsRecordsComment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsComment {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent">Absent</a></code> | <code>*string</code> | If this parameter is present, only records *without* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record comment. Comment filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present">Present</a></code> | <code>*string</code> | If this parameter is present, only records *with* a comment are returned. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record comment. Comment filters are case-insensitive. |

---

##### `Absent`<sup>Optional</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.absent"></a>

```go
Absent *string
```

- *Type:* *string

If this parameter is present, only records *without* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.present"></a>

```go
Present *string
```

- *Type:* *string

If this parameter is present, only records *with* a comment are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record comment. Comment filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsConfig <a name="DataCloudflareDnsRecordsConfig" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	Comment: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment,
	Content: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent,
	Direction: *string,
	Match: *string,
	MaxItems: *f64,
	Name: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName,
	Order: *string,
	Proxied: interface{},
	Search: *string,
	Tag: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag,
	TagMatch: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment">Comment</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content">Content</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction">Direction</a></code> | <code>*string</code> | Direction to order DNS records in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match">Match</a></code> | <code>*string</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name">Name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied">Proxied</a></code> | <code>interface{}</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search">Search</a></code> | <code>*string</code> | Allows searching in multiple properties of a DNS record simultaneously. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag">Tag</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch">TagMatch</a></code> | <code>*string</code> | Whether to match all tag search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type">Type</a></code> | <code>*string</code> | Record type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.comment"></a>

```go
Comment DataCloudflareDnsRecordsComment
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsComment">DataCloudflareDnsRecordsComment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.content"></a>

```go
Content DataCloudflareDnsRecordsContent
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent">DataCloudflareDnsRecordsContent</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction to order DNS records in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.match"></a>

```go
Match *string
```

- *Type:* *string

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.name"></a>

```go
Name DataCloudflareDnsRecordsName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName">DataCloudflareDnsRecordsName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}.

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order DNS records by. Available values: "type", "name", "content", "ttl", "proxied".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.proxied"></a>

```go
Proxied interface{}
```

- *Type:* interface{}

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Allows searching in multiple properties of a DNS record simultaneously.

This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tag"></a>

```go
Tag DataCloudflareDnsRecordsTag
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag">DataCloudflareDnsRecordsTag</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}.

---

##### `TagMatch`<sup>Optional</sup> <a name="TagMatch" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.tagMatch"></a>

```go
TagMatch *string
```

- *Type:* *string

Whether to match all tag search requirements or at least one (any).

If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Record type.

Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}

---

### DataCloudflareDnsRecordsContent <a name="DataCloudflareDnsRecordsContent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsContent {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record content. Content filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record content. Content filters are case-insensitive. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContent.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record content. Content filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsName <a name="DataCloudflareDnsRecordsName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsName {
	Contains: *string,
	Endswith: *string,
	Exact: *string,
	Startswith: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains">Contains</a></code> | <code>*string</code> | Substring of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith">Endswith</a></code> | <code>*string</code> | Suffix of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact">Exact</a></code> | <code>*string</code> | Exact value of the DNS record name. Name filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith">Startswith</a></code> | <code>*string</code> | Prefix of the DNS record name. Name filters are case-insensitive. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

Substring of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

Suffix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Exact value of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsName.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

Prefix of the DNS record name. Name filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

### DataCloudflareDnsRecordsResult <a name="DataCloudflareDnsRecordsResult" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsResult {

}
```


### DataCloudflareDnsRecordsResultData <a name="DataCloudflareDnsRecordsResultData" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsResultData {

}
```


### DataCloudflareDnsRecordsResultSettings <a name="DataCloudflareDnsRecordsResultSettings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsResultSettings {

}
```


### DataCloudflareDnsRecordsTag <a name="DataCloudflareDnsRecordsTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

&datacloudflarednsrecords.DataCloudflareDnsRecordsTag {
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent">Absent</a></code> | <code>*string</code> | Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains">Contains</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith">Endswith</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact">Exact</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present">Present</a></code> | <code>*string</code> | Name of a tag which must be present on the DNS record. Tag filters are case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith">Startswith</a></code> | <code>*string</code> | A tag and value, of the form `<tag-name>:<tag-value>`. |

---

##### `Absent`<sup>Optional</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.absent"></a>

```go
Absent *string
```

- *Type:* *string

Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.contains"></a>

```go
Contains *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}

---

##### `Endswith`<sup>Optional</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.endswith"></a>

```go
Endswith *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.present"></a>

```go
Present *string
```

- *Type:* *string

Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}

---

##### `Startswith`<sup>Optional</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTag.property.startswith"></a>

```go
Startswith *string
```

- *Type:* *string

A tag and value, of the form `<tag-name>:<tag-value>`.

The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsRecordsCommentOutputReference <a name="DataCloudflareDnsRecordsCommentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsCommentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsCommentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent">ResetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsent` <a name="ResetAbsent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetAbsent"></a>

```go
func ResetAbsent()
```

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput">AbsentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput">PresentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent">Absent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present">Present</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsentInput`<sup>Optional</sup> <a name="AbsentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absentInput"></a>

```go
func AbsentInput() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.presentInput"></a>

```go
func PresentInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Absent`<sup>Required</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.absent"></a>

```go
func Absent() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.present"></a>

```go
func Present() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsCommentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordsContentOutputReference <a name="DataCloudflareDnsRecordsContentOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordsNameOutputReference <a name="DataCloudflareDnsRecordsNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataCloudflareDnsRecordsResultDataOutputReference <a name="DataCloudflareDnsRecordsResultDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsResultDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsResultDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm">Algorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude">Altitude</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType">DigestType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags">Flags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection">LatDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection">LongDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType">MatchingType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference">Preference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol">Protocol</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement">Replacement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector">Selector</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage">Usage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.algorithm"></a>

```go
func Algorithm() *f64
```

- *Type:* *f64

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.altitude"></a>

```go
func Altitude() *f64
```

- *Type:* *f64

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.digestType"></a>

```go
func DigestType() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.flags"></a>

```go
func Flags() AnyMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.AnyMap

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDegrees"></a>

```go
func LatDegrees() *f64
```

- *Type:* *f64

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latDirection"></a>

```go
func LatDirection() *string
```

- *Type:* *string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latMinutes"></a>

```go
func LatMinutes() *f64
```

- *Type:* *f64

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.latSeconds"></a>

```go
func LatSeconds() *f64
```

- *Type:* *f64

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDegrees"></a>

```go
func LongDegrees() *f64
```

- *Type:* *f64

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longDirection"></a>

```go
func LongDirection() *string
```

- *Type:* *string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longMinutes"></a>

```go
func LongMinutes() *f64
```

- *Type:* *f64

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.longSeconds"></a>

```go
func LongSeconds() *f64
```

- *Type:* *f64

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.matchingType"></a>

```go
func MatchingType() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionHorz"></a>

```go
func PrecisionHorz() *f64
```

- *Type:* *f64

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.precisionVert"></a>

```go
func PrecisionVert() *f64
```

- *Type:* *f64

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.preference"></a>

```go
func Preference() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.protocol"></a>

```go
func Protocol() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.replacement"></a>

```go
func Replacement() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.selector"></a>

```go
func Selector() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.usage"></a>

```go
func Usage() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsRecordsResultData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultData">DataCloudflareDnsRecordsResultData</a>

---


### DataCloudflareDnsRecordsResultList <a name="DataCloudflareDnsRecordsResultList" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareDnsRecordsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareDnsRecordsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareDnsRecordsResultOutputReference <a name="DataCloudflareDnsRecordsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareDnsRecordsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn">CommentModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta">Meta</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable">Proxiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied">Proxied</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn">TagsModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CommentModifiedOn`<sup>Required</sup> <a name="CommentModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.commentModifiedOn"></a>

```go
func CommentModifiedOn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.data"></a>

```go
func Data() DataCloudflareDnsRecordsResultDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultDataOutputReference">DataCloudflareDnsRecordsResultDataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.meta"></a>

```go
func Meta() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxiable"></a>

```go
func Proxiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.proxied"></a>

```go
func Proxied() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.settings"></a>

```go
func Settings() DataCloudflareDnsRecordsResultSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference">DataCloudflareDnsRecordsResultSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TagsModifiedOn`<sup>Required</sup> <a name="TagsModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.tagsModifiedOn"></a>

```go
func TagsModifiedOn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsRecordsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResult">DataCloudflareDnsRecordsResult</a>

---


### DataCloudflareDnsRecordsResultSettingsOutputReference <a name="DataCloudflareDnsRecordsResultSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsResultSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsResultSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname">FlattenCname</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only">Ipv4Only</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only">Ipv6Only</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlattenCname`<sup>Required</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.flattenCname"></a>

```go
func FlattenCname() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv4Only`<sup>Required</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv4Only"></a>

```go
func Ipv4Only() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ipv6Only`<sup>Required</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.ipv6Only"></a>

```go
func Ipv6Only() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareDnsRecordsResultSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsResultSettings">DataCloudflareDnsRecordsResultSettings</a>

---


### DataCloudflareDnsRecordsTagOutputReference <a name="DataCloudflareDnsRecordsTagOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflarednsrecords"

datacloudflarednsrecords.NewDataCloudflareDnsRecordsTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareDnsRecordsTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent">ResetAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith">ResetEndswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith">ResetStartswith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsent` <a name="ResetAbsent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetAbsent"></a>

```go
func ResetAbsent()
```

##### `ResetContains` <a name="ResetContains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEndswith` <a name="ResetEndswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetEndswith"></a>

```go
func ResetEndswith()
```

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetStartswith` <a name="ResetStartswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.resetStartswith"></a>

```go
func ResetStartswith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput">AbsentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput">ContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput">EndswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput">PresentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput">StartswithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent">Absent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains">Contains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith">Endswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present">Present</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith">Startswith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsentInput`<sup>Optional</sup> <a name="AbsentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absentInput"></a>

```go
func AbsentInput() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.containsInput"></a>

```go
func ContainsInput() *string
```

- *Type:* *string

---

##### `EndswithInput`<sup>Optional</sup> <a name="EndswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswithInput"></a>

```go
func EndswithInput() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.presentInput"></a>

```go
func PresentInput() *string
```

- *Type:* *string

---

##### `StartswithInput`<sup>Optional</sup> <a name="StartswithInput" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswithInput"></a>

```go
func StartswithInput() *string
```

- *Type:* *string

---

##### `Absent`<sup>Required</sup> <a name="Absent" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.absent"></a>

```go
func Absent() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.contains"></a>

```go
func Contains() *string
```

- *Type:* *string

---

##### `Endswith`<sup>Required</sup> <a name="Endswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.endswith"></a>

```go
func Endswith() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.present"></a>

```go
func Present() *string
```

- *Type:* *string

---

##### `Startswith`<sup>Required</sup> <a name="Startswith" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.startswith"></a>

```go
func Startswith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareDnsRecords.DataCloudflareDnsRecordsTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



