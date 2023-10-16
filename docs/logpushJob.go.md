# `cloudflare_logpush_job`

Refer to the Terraform Registory for docs: [`cloudflare_logpush_job`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job).

# `logpushJob` Submodule <a name="`logpushJob` Submodule" id="@cdktf/provider-cloudflare.logpushJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushJob <a name="LogpushJob" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job cloudflare_logpush_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/logpushjob"

logpushjob.NewLogpushJob(scope Construct, id *string, config LogpushJobConfig) LogpushJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig">LogpushJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency">ResetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions">ResetLogpullOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes">ResetMaxUploadBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds">ResetMaxUploadIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords">ResetMaxUploadRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge">ResetOwnershipChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFrequency` <a name="ResetFrequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetFrequency"></a>

```go
func ResetFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetId"></a>

```go
func ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetKind"></a>

```go
func ResetKind()
```

##### `ResetLogpullOptions` <a name="ResetLogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetLogpullOptions"></a>

```go
func ResetLogpullOptions()
```

##### `ResetMaxUploadBytes` <a name="ResetMaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadBytes"></a>

```go
func ResetMaxUploadBytes()
```

##### `ResetMaxUploadIntervalSeconds` <a name="ResetMaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadIntervalSeconds"></a>

```go
func ResetMaxUploadIntervalSeconds()
```

##### `ResetMaxUploadRecords` <a name="ResetMaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetMaxUploadRecords"></a>

```go
func ResetMaxUploadRecords()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetName"></a>

```go
func ResetName()
```

##### `ResetOwnershipChallenge` <a name="ResetOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetOwnershipChallenge"></a>

```go
func ResetOwnershipChallenge()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/logpushjob"

logpushjob.LogpushJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/logpushjob"

logpushjob.LogpushJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/logpushjob"

logpushjob.LogpushJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput">DestinationConfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput">LogpullOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput">MaxUploadBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput">MaxUploadIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput">MaxUploadRecordsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput">OwnershipChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf">DestinationConf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions">LogpullOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DestinationConfInput`<sup>Optional</sup> <a name="DestinationConfInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConfInput"></a>

```go
func DestinationConfInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LogpullOptionsInput`<sup>Optional</sup> <a name="LogpullOptionsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptionsInput"></a>

```go
func LogpullOptionsInput() *string
```

- *Type:* *string

---

##### `MaxUploadBytesInput`<sup>Optional</sup> <a name="MaxUploadBytesInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytesInput"></a>

```go
func MaxUploadBytesInput() *f64
```

- *Type:* *f64

---

##### `MaxUploadIntervalSecondsInput`<sup>Optional</sup> <a name="MaxUploadIntervalSecondsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSecondsInput"></a>

```go
func MaxUploadIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxUploadRecordsInput`<sup>Optional</sup> <a name="MaxUploadRecordsInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecordsInput"></a>

```go
func MaxUploadRecordsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnershipChallengeInput`<sup>Optional</sup> <a name="OwnershipChallengeInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallengeInput"></a>

```go
func OwnershipChallengeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.destinationConf"></a>

```go
func DestinationConf() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LogpullOptions`<sup>Required</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.logpullOptions"></a>

```go
func LogpullOptions() *string
```

- *Type:* *string

---

##### `MaxUploadBytes`<sup>Required</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadBytes"></a>

```go
func MaxUploadBytes() *f64
```

- *Type:* *f64

---

##### `MaxUploadIntervalSeconds`<sup>Required</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadIntervalSeconds"></a>

```go
func MaxUploadIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `MaxUploadRecords`<sup>Required</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.maxUploadRecords"></a>

```go
func MaxUploadRecords() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnershipChallenge`<sup>Required</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.ownershipChallenge"></a>

```go
func OwnershipChallenge() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.logpushJob.LogpushJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushJobConfig <a name="LogpushJobConfig" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/logpushjob"

&logpushjob.LogpushJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dataset: *string,
	DestinationConf: *string,
	AccountId: *string,
	Enabled: interface{},
	Filter: *string,
	Frequency: *string,
	Id: *string,
	Kind: *string,
	LogpullOptions: *string,
	MaxUploadBytes: *f64,
	MaxUploadIntervalSeconds: *f64,
	MaxUploadRecords: *f64,
	Name: *string,
	OwnershipChallenge: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset">Dataset</a></code> | <code>*string</code> | The kind of the dataset to use with the logpush job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf">DestinationConf</a></code> | <code>*string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether to enable the job. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter">Filter</a></code> | <code>*string</code> | Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency">Frequency</a></code> | <code>*string</code> | A higher frequency will result in logs being pushed on faster with smaller files. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#id LogpushJob#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind">Kind</a></code> | <code>*string</code> | The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions">LogpullOptions</a></code> | <code>*string</code> | Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options). |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes">MaxUploadBytes</a></code> | <code>*f64</code> | The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds">MaxUploadIntervalSeconds</a></code> | <code>*f64</code> | The maximum interval in seconds for log batches. Value must be between 30 and 300. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords">MaxUploadRecords</a></code> | <code>*f64</code> | The maximum number of log lines per batch. Value must be between 1000 and 1,000,000. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name">Name</a></code> | <code>*string</code> | The name of the logpush job to create. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge">OwnershipChallenge</a></code> | <code>*string</code> | Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic. |
| <code><a href="#@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The kind of the dataset to use with the logpush job.

Available values: `access_requests`, `firewall_events`, `http_requests`, `spectrum_events`, `nel_reports`, `audit_logs`, `gateway_dns`, `gateway_http`, `gateway_network`, `dns_logs`, `network_analytics_logs`, `workers_trace_events`, `device_posture_results`, `zero_trust_network_sessions`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#dataset LogpushJob#dataset}

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.destinationConf"></a>

```go
DestinationConf *string
```

- *Type:* *string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/reference/logpush-api-configuration#destination).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#destination_conf LogpushJob#destination_conf}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#account_id LogpushJob#account_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether to enable the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#enabled LogpushJob#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Use filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/logpush-api-configuration/filters/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#filter LogpushJob#filter}

---

##### `Frequency`<sup>Optional</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

A higher frequency will result in logs being pushed on faster with smaller files.

`low` frequency will push logs less often with larger files. Available values: `high`, `low`. Defaults to `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#frequency LogpushJob#frequency}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#id LogpushJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of logpush job to create. Available values: `edge`, `instant-logs`, `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#kind LogpushJob#kind}

---

##### `LogpullOptions`<sup>Optional</sup> <a name="LogpullOptions" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.logpullOptions"></a>

```go
LogpullOptions *string
```

- *Type:* *string

Configuration string for the Logshare API. It specifies things like requested fields and timestamp formats. See [Logpush options documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#options).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#logpull_options LogpushJob#logpull_options}

---

##### `MaxUploadBytes`<sup>Optional</sup> <a name="MaxUploadBytes" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadBytes"></a>

```go
MaxUploadBytes *f64
```

- *Type:* *f64

The maximum uncompressed file size of a batch of logs. Value must be between 5MB and 1GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_bytes LogpushJob#max_upload_bytes}

---

##### `MaxUploadIntervalSeconds`<sup>Optional</sup> <a name="MaxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadIntervalSeconds"></a>

```go
MaxUploadIntervalSeconds *f64
```

- *Type:* *f64

The maximum interval in seconds for log batches. Value must be between 30 and 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_interval_seconds LogpushJob#max_upload_interval_seconds}

---

##### `MaxUploadRecords`<sup>Optional</sup> <a name="MaxUploadRecords" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.maxUploadRecords"></a>

```go
MaxUploadRecords *f64
```

- *Type:* *f64

The maximum number of log lines per batch. Value must be between 1000 and 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#max_upload_records LogpushJob#max_upload_records}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the logpush job to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#name LogpushJob#name}

---

##### `OwnershipChallenge`<sup>Optional</sup> <a name="OwnershipChallenge" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.ownershipChallenge"></a>

```go
OwnershipChallenge *string
```

- *Type:* *string

Ownership challenge token to prove destination ownership, required when destination is Amazon S3, Google Cloud Storage, Microsoft Azure or Sumo Logic.

See [Developer documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#usage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#ownership_challenge LogpushJob#ownership_challenge}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushJob.LogpushJobConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/logpush_job#zone_id LogpushJob#zone_id}

---



