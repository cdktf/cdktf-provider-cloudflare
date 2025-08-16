# `dataCloudflareNotificationPolicy` Submodule <a name="`dataCloudflareNotificationPolicy` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicy <a name="DataCloudflareNotificationPolicy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy(scope: Construct, id: string, config: DataCloudflareNotificationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig">DataCloudflareNotificationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig">DataCloudflareNotificationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareNotificationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareNotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval">alertInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType">alertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alertInterval`<sup>Required</sup> <a name="alertInterval" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval"></a>

```typescript
public readonly alertInterval: string;
```

- *Type:* string

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType"></a>

```typescript
public readonly alertType: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters"></a>

```typescript
public readonly filters: DataCloudflareNotificationPolicyFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms"></a>

```typescript
public readonly mechanisms: DataCloudflareNotificationPolicyMechanismsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyConfig <a name="DataCloudflareNotificationPolicyConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyConfig: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier of a notification policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier of a notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}

---

### DataCloudflareNotificationPolicyFilters <a name="DataCloudflareNotificationPolicyFilters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyFilters: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters = { ... }
```


### DataCloudflareNotificationPolicyMechanisms <a name="DataCloudflareNotificationPolicyMechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyMechanisms: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms = { ... }
```


### DataCloudflareNotificationPolicyMechanismsEmail <a name="DataCloudflareNotificationPolicyMechanismsEmail" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyMechanismsEmail: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail = { ... }
```


### DataCloudflareNotificationPolicyMechanismsPagerduty <a name="DataCloudflareNotificationPolicyMechanismsPagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyMechanismsPagerduty: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty = { ... }
```


### DataCloudflareNotificationPolicyMechanismsWebhooks <a name="DataCloudflareNotificationPolicyMechanismsWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPolicyMechanismsWebhooks: dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyFiltersOutputReference <a name="DataCloudflareNotificationPolicyFiltersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns">affectedAsns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents">affectedComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations">affectedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode">airportCode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">alertTriggerPreferences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">alertTriggerPreferencesValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled">enabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment">environment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event">event</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource">eventSource</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType">eventType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact">incidentImpact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId">inputId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass">insightClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit">limit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag">logoTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond">megabitsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth">newHealth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus">newStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond">packetsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId">poolId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames">popNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product">product</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId">projectId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol">protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag">queryTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors">selectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo">slo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status">status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname">targetHostname</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp">targetIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName">targetZoneName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions">trafficExclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId">tunnelId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName">tunnelName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where">where</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `affectedAsns`<sup>Required</sup> <a name="affectedAsns" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```typescript
public readonly affectedAsns: string[];
```

- *Type:* string[]

---

##### `affectedComponents`<sup>Required</sup> <a name="affectedComponents" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```typescript
public readonly affectedComponents: string[];
```

- *Type:* string[]

---

##### `affectedLocations`<sup>Required</sup> <a name="affectedLocations" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```typescript
public readonly affectedLocations: string[];
```

- *Type:* string[]

---

##### `airportCode`<sup>Required</sup> <a name="airportCode" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode"></a>

```typescript
public readonly airportCode: string[];
```

- *Type:* string[]

---

##### `alertTriggerPreferences`<sup>Required</sup> <a name="alertTriggerPreferences" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```typescript
public readonly alertTriggerPreferences: string[];
```

- *Type:* string[]

---

##### `alertTriggerPreferencesValue`<sup>Required</sup> <a name="alertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```typescript
public readonly alertTriggerPreferencesValue: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment"></a>

```typescript
public readonly environment: string[];
```

- *Type:* string[]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event"></a>

```typescript
public readonly event: string[];
```

- *Type:* string[]

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource"></a>

```typescript
public readonly eventSource: string[];
```

- *Type:* string[]

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string[];
```

- *Type:* string[]

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string[];
```

- *Type:* string[]

---

##### `incidentImpact`<sup>Required</sup> <a name="incidentImpact" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```typescript
public readonly incidentImpact: string[];
```

- *Type:* string[]

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId"></a>

```typescript
public readonly inputId: string[];
```

- *Type:* string[]

---

##### `insightClass`<sup>Required</sup> <a name="insightClass" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass"></a>

```typescript
public readonly insightClass: string[];
```

- *Type:* string[]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit"></a>

```typescript
public readonly limit: string[];
```

- *Type:* string[]

---

##### `logoTag`<sup>Required</sup> <a name="logoTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag"></a>

```typescript
public readonly logoTag: string[];
```

- *Type:* string[]

---

##### `megabitsPerSecond`<sup>Required</sup> <a name="megabitsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```typescript
public readonly megabitsPerSecond: string[];
```

- *Type:* string[]

---

##### `newHealth`<sup>Required</sup> <a name="newHealth" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth"></a>

```typescript
public readonly newHealth: string[];
```

- *Type:* string[]

---

##### `newStatus`<sup>Required</sup> <a name="newStatus" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus"></a>

```typescript
public readonly newStatus: string[];
```

- *Type:* string[]

---

##### `packetsPerSecond`<sup>Required</sup> <a name="packetsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```typescript
public readonly packetsPerSecond: string[];
```

- *Type:* string[]

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId"></a>

```typescript
public readonly poolId: string[];
```

- *Type:* string[]

---

##### `popNames`<sup>Required</sup> <a name="popNames" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames"></a>

```typescript
public readonly popNames: string[];
```

- *Type:* string[]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product"></a>

```typescript
public readonly product: string[];
```

- *Type:* string[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string[];
```

- *Type:* string[]

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag"></a>

```typescript
public readonly queryTag: string[];
```

- *Type:* string[]

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: string[];
```

- *Type:* string[]

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors"></a>

```typescript
public readonly selectors: string[];
```

- *Type:* string[]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo"></a>

```typescript
public readonly slo: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

##### `targetHostname`<sup>Required</sup> <a name="targetHostname" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```typescript
public readonly targetHostname: string[];
```

- *Type:* string[]

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp"></a>

```typescript
public readonly targetIp: string[];
```

- *Type:* string[]

---

##### `targetZoneName`<sup>Required</sup> <a name="targetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```typescript
public readonly targetZoneName: string[];
```

- *Type:* string[]

---

##### `trafficExclusions`<sup>Required</sup> <a name="trafficExclusions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```typescript
public readonly trafficExclusions: string[];
```

- *Type:* string[]

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string[];
```

- *Type:* string[]

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```typescript
public readonly tunnelName: string[];
```

- *Type:* string[]

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where"></a>

```typescript
public readonly where: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyFilters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a>

---


### DataCloudflareNotificationPolicyMechanismsEmailList <a name="DataCloudflareNotificationPolicyMechanismsEmailList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPolicyMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPolicyMechanismsEmailOutputReference <a name="DataCloudflareNotificationPolicyMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyMechanismsEmail;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a>

---


### DataCloudflareNotificationPolicyMechanismsOutputReference <a name="DataCloudflareNotificationPolicyMechanismsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email"></a>

```typescript
public readonly email: DataCloudflareNotificationPolicyMechanismsEmailList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: DataCloudflareNotificationPolicyMechanismsPagerdutyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```typescript
public readonly webhooks: DataCloudflareNotificationPolicyMechanismsWebhooksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyMechanisms;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a>

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyList <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyMechanismsPagerduty;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a>

---


### DataCloudflareNotificationPolicyMechanismsWebhooksList <a name="DataCloudflareNotificationPolicyMechanismsWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicy } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPolicyMechanismsWebhooks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a>

---



