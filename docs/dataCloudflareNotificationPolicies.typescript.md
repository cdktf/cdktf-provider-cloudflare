# `dataCloudflareNotificationPolicies` Submodule <a name="`dataCloudflareNotificationPolicies` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicies <a name="DataCloudflareNotificationPolicies" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/notification_policies cloudflare_notification_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies(scope: Construct, id: string, config: DataCloudflareNotificationPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig">DataCloudflareNotificationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig">DataCloudflareNotificationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareNotificationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareNotificationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result"></a>

```typescript
public readonly result: DataCloudflareNotificationPoliciesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPoliciesConfig <a name="DataCloudflareNotificationPoliciesConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesConfig: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId">accountId</a></code> | <code>string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/notification_policies#account_id DataCloudflareNotificationPolicies#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/notification_policies#max_items DataCloudflareNotificationPolicies#max_items}

---

### DataCloudflareNotificationPoliciesResult <a name="DataCloudflareNotificationPoliciesResult" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResult: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult = { ... }
```


### DataCloudflareNotificationPoliciesResultFilters <a name="DataCloudflareNotificationPoliciesResultFilters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResultFilters: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters = { ... }
```


### DataCloudflareNotificationPoliciesResultMechanisms <a name="DataCloudflareNotificationPoliciesResultMechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResultMechanisms: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms = { ... }
```


### DataCloudflareNotificationPoliciesResultMechanismsEmail <a name="DataCloudflareNotificationPoliciesResultMechanismsEmail" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResultMechanismsEmail: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail = { ... }
```


### DataCloudflareNotificationPoliciesResultMechanismsPagerduty <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResultMechanismsPagerduty: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty = { ... }
```


### DataCloudflareNotificationPoliciesResultMechanismsWebhooks <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

const dataCloudflareNotificationPoliciesResultMechanismsWebhooks: dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPoliciesResultFiltersOutputReference <a name="DataCloudflareNotificationPoliciesResultFiltersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns">affectedAsns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents">affectedComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations">affectedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode">airportCode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences">alertTriggerPreferences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue">alertTriggerPreferencesValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled">enabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment">environment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event">event</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource">eventSource</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType">eventType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact">incidentImpact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId">inputId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass">insightClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit">limit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag">logoTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond">megabitsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth">newHealth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus">newStatus</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond">packetsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId">poolId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames">popNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product">product</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId">projectId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol">protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag">queryTag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors">selectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo">slo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status">status</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname">targetHostname</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp">targetIp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName">targetZoneName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions">trafficExclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId">tunnelId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName">tunnelName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where">where</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `affectedAsns`<sup>Required</sup> <a name="affectedAsns" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns"></a>

```typescript
public readonly affectedAsns: string[];
```

- *Type:* string[]

---

##### `affectedComponents`<sup>Required</sup> <a name="affectedComponents" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents"></a>

```typescript
public readonly affectedComponents: string[];
```

- *Type:* string[]

---

##### `affectedLocations`<sup>Required</sup> <a name="affectedLocations" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations"></a>

```typescript
public readonly affectedLocations: string[];
```

- *Type:* string[]

---

##### `airportCode`<sup>Required</sup> <a name="airportCode" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode"></a>

```typescript
public readonly airportCode: string[];
```

- *Type:* string[]

---

##### `alertTriggerPreferences`<sup>Required</sup> <a name="alertTriggerPreferences" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences"></a>

```typescript
public readonly alertTriggerPreferences: string[];
```

- *Type:* string[]

---

##### `alertTriggerPreferencesValue`<sup>Required</sup> <a name="alertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```typescript
public readonly alertTriggerPreferencesValue: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment"></a>

```typescript
public readonly environment: string[];
```

- *Type:* string[]

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event"></a>

```typescript
public readonly event: string[];
```

- *Type:* string[]

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource"></a>

```typescript
public readonly eventSource: string[];
```

- *Type:* string[]

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string[];
```

- *Type:* string[]

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string[];
```

- *Type:* string[]

---

##### `incidentImpact`<sup>Required</sup> <a name="incidentImpact" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact"></a>

```typescript
public readonly incidentImpact: string[];
```

- *Type:* string[]

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId"></a>

```typescript
public readonly inputId: string[];
```

- *Type:* string[]

---

##### `insightClass`<sup>Required</sup> <a name="insightClass" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass"></a>

```typescript
public readonly insightClass: string[];
```

- *Type:* string[]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit"></a>

```typescript
public readonly limit: string[];
```

- *Type:* string[]

---

##### `logoTag`<sup>Required</sup> <a name="logoTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag"></a>

```typescript
public readonly logoTag: string[];
```

- *Type:* string[]

---

##### `megabitsPerSecond`<sup>Required</sup> <a name="megabitsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond"></a>

```typescript
public readonly megabitsPerSecond: string[];
```

- *Type:* string[]

---

##### `newHealth`<sup>Required</sup> <a name="newHealth" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth"></a>

```typescript
public readonly newHealth: string[];
```

- *Type:* string[]

---

##### `newStatus`<sup>Required</sup> <a name="newStatus" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus"></a>

```typescript
public readonly newStatus: string[];
```

- *Type:* string[]

---

##### `packetsPerSecond`<sup>Required</sup> <a name="packetsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond"></a>

```typescript
public readonly packetsPerSecond: string[];
```

- *Type:* string[]

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId"></a>

```typescript
public readonly poolId: string[];
```

- *Type:* string[]

---

##### `popNames`<sup>Required</sup> <a name="popNames" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames"></a>

```typescript
public readonly popNames: string[];
```

- *Type:* string[]

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product"></a>

```typescript
public readonly product: string[];
```

- *Type:* string[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string[];
```

- *Type:* string[]

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag"></a>

```typescript
public readonly queryTag: string[];
```

- *Type:* string[]

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: string[];
```

- *Type:* string[]

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors"></a>

```typescript
public readonly selectors: string[];
```

- *Type:* string[]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo"></a>

```typescript
public readonly slo: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

##### `targetHostname`<sup>Required</sup> <a name="targetHostname" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname"></a>

```typescript
public readonly targetHostname: string[];
```

- *Type:* string[]

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp"></a>

```typescript
public readonly targetIp: string[];
```

- *Type:* string[]

---

##### `targetZoneName`<sup>Required</sup> <a name="targetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName"></a>

```typescript
public readonly targetZoneName: string[];
```

- *Type:* string[]

---

##### `trafficExclusions`<sup>Required</sup> <a name="trafficExclusions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions"></a>

```typescript
public readonly trafficExclusions: string[];
```

- *Type:* string[]

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string[];
```

- *Type:* string[]

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName"></a>

```typescript
public readonly tunnelName: string[];
```

- *Type:* string[]

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where"></a>

```typescript
public readonly where: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResultFilters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a>

---


### DataCloudflareNotificationPoliciesResultList <a name="DataCloudflareNotificationPoliciesResultList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailList <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResultMechanismsEmail;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email"></a>

```typescript
public readonly email: DataCloudflareNotificationPoliciesResultMechanismsEmailList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty"></a>

```typescript
public readonly pagerduty: DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks"></a>

```typescript
public readonly webhooks: DataCloudflareNotificationPoliciesResultMechanismsWebhooksList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResultMechanisms;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResultMechanismsPagerduty;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksList <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get"></a>

```typescript
public get(index: number): DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResultMechanismsWebhooks;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a>

---


### DataCloudflareNotificationPoliciesResultOutputReference <a name="DataCloudflareNotificationPoliciesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareNotificationPolicies } from '@cdktf/provider-cloudflare'

new dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval">alertInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType">alertType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified">modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertInterval`<sup>Required</sup> <a name="alertInterval" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval"></a>

```typescript
public readonly alertInterval: string;
```

- *Type:* string

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType"></a>

```typescript
public readonly alertType: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters"></a>

```typescript
public readonly filters: DataCloudflareNotificationPoliciesResultFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms"></a>

```typescript
public readonly mechanisms: DataCloudflareNotificationPoliciesResultMechanismsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified"></a>

```typescript
public readonly modified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareNotificationPoliciesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a>

---



